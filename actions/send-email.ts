"use server"

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  serviceType: string
  address?: string
  message: string
}) {
  try {
    // Validate environment variables
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
    const TO_EMAIL = process.env.TO_EMAIL || "info@primeshinecleaning.com"

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      throw new Error("Mailgun configuration is missing")
    }

    // Extract form data
    const { name, email, phone, serviceType, address, message } = formData

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !message) {
      return {
        success: false,
        error: "Missing required fields",
      }
    }

    // Create email content
    const subject = `New Contact Form Submission - ${serviceType}`

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f8f9fa; padding: 20px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #2563eb; }
            .field-value { margin-top: 5px; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">
                  <a href="tel:${phone}">${phone}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Service Type:</div>
                <div class="field-value">${serviceType}</div>
              </div>
              
              ${
                address
                  ? `
                <div class="field">
                  <div class="field-label">Property Address:</div>
                  <div class="field-value">${address}</div>
                </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              
              <p style="font-size: 12px; color: #666;">
                This message was sent from the PrimeShine Cleaning contact form on ${new Date().toLocaleString()}.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
${address ? `Property Address: ${address}` : ""}

Message:
${message}

---
Sent from PrimeShine Cleaning contact form on ${new Date().toLocaleString()}
    `

    // Prepare Mailgun request
    const mailgunUrl = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`

    const formDataToSend = new FormData()
    formDataToSend.append(
      "from",
      `PrimeShine Contact Form <noreply@${MAILGUN_DOMAIN}>`
    )
    formDataToSend.append("to", TO_EMAIL)
    formDataToSend.append("subject", subject)
    formDataToSend.append("text", textContent)
    formDataToSend.append("html", htmlContent)
    formDataToSend.append("h:Reply-To", email) // Set reply-to as customer's email

    // Send email via Mailgun
    const response = await fetch(mailgunUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString(
          "base64"
        )}`,
      },
      body: formDataToSend,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Mailgun error:", errorText)
      throw new Error(`Mailgun API error: ${response.status}`)
    }

    const result = await response.json()
    console.log("Email sent successfully:", result.id)

    // Optional: Send auto-reply to customer
    await sendAutoReply(email, name, MAILGUN_API_KEY, MAILGUN_DOMAIN)

    return {
      success: true,
      message: "Email sent successfully",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

async function sendAutoReply(
  customerEmail: string,
  customerName: string,
  apiKey: string,
  domain: string
): Promise<void> {
  try {
    const autoReplySubject: string =
      "Thank you for contacting PrimeShine Cleaning!"

    const autoReplyHtml: string = `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #3b82f6; color: white; padding: 20px; text-align: center; }
                        .content { background-color: #f8f9fa; padding: 20px; }
                        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Thank You for Your Interest!</h1>
                        </div>
                        <div class="content">
                            <p>Hi ${customerName},</p>
                            
                            <p>Thank you for reaching out to PrimeShine Cleaning! We've received your message and will get back to you within 24 hours with a free quote.</p>
                            
                            <p>In the meantime, here's what you can expect:</p>
                            <ul>
                                <li>✓ Professional assessment of your cleaning needs</li>
                                <li>✓ Competitive pricing with no hidden fees</li>
                                <li>✓ Satisfaction guarantee on all our services</li>
                                <li>✓ Flexible scheduling to fit your needs</li>
                            </ul>
                            
                            <p>If you have any urgent questions, feel free to call us at <strong>(555) 123-4567</strong>.</p>
                            
                            <p>Best regards,<br>
                            The PrimeShine Cleaning Team</p>
                        </div>
                        <div class="footer">
                            <p>PrimeShine Cleaning | Tupelo, MS | (555) 123-4567</p>
                        </div>
                    </div>
                </body>
            </html>
        `

    const autoReplyText: string = `
Hi ${customerName},

Thank you for reaching out to PrimeShine Cleaning! We've received your message and will get back to you within 24 hours with a free quote.

In the meantime, here's what you can expect:
• Professional assessment of your cleaning needs
• Competitive pricing with no hidden fees  
• Satisfaction guarantee on all our services
• Flexible scheduling to fit your needs

If you have any urgent questions, feel free to call us at (555) 123-4567.

Best regards,
The PrimeShine Cleaning Team

PrimeShine Cleaning | Tupelo, MS | (555) 123-4567
        `

    const formData: FormData = new FormData()
    formData.append("from", `PrimeShine Cleaning <noreply@${domain}>`)
    formData.append("to", customerEmail)
    formData.append("subject", autoReplySubject)
    formData.append("text", autoReplyText)
    formData.append("html", autoReplyHtml)

    await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString(
          "base64"
        )}`,
      },
      body: formData,
    })
  } catch (error) {
    console.error("Error sending auto-reply:", error)
    // Don't throw error for auto-reply failure
  }
}
