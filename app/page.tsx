"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  CheckCircle,
  Mail,
  ArrowRight,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import MapMarker from "@/components/map"
import { ReactGoogleReviews } from "react-google-reviews"
import { MasonryContainer } from "@/components/reviews/masonry-container"
import { ReviewCard } from "@/components/reviews/review-card"
import { sendContactEmail } from "@/actions/send-email"
import Link from "next/link"
import { useRouter } from "next/navigation"

const WindowCleanerWebsite = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      servicePlan: "",
      address: "",
      message: "",
    },
    mode: "all",
  })

  interface FormData {
    name: string
    email: string
    phone: string
    serviceType: string
    address: string
    message: string
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent. We'll get back to you within 24 hours!",
        })
        reset() // Reset form after successful submission
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Soft blurred white effect radiating from top-left */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 via-white/50 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>

        {/* Content container - aligned to top left */}
        <div className="relative h-full flex items-start">
          <div className="pl-4 sm:pl-6 lg:pl-8 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Dirty Windows?
              <br />
              <span className="text-primary">We can fix that</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl tracking-wider drop-shadow-md">
              Professional window cleaning services that leave your windows
              spotless and streak-free. Satisfaction guaranteed.
            </p>
            <Link href="/#contact">
              <button className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-bold text-white transition-all hover:bg-primary/85 cursor-pointer shadow-lg">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional cleaning with premium protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Scrub",
                desc: "Deep clean with professional-grade solutions to remove all dirt and grime",
                image: "/prime-shine-scrub.png",
              },
              {
                step: "2",
                title: "Squeegee",
                desc: "Perfect streak-free finish using professional squeegee techniques",
                image: "/prime-shine-squegee.png",
              },
              {
                step: "3",
                title: "Detail",
                desc: "Thoroughly clean edges and corners for a spotless finish",
                image: "/prime-shine-detail.png",
              },
              {
                step: "4",
                title: "Protect",
                desc: "Apply protective coating for longer-lasting cleanliness",
                image: "/prime-shine-rainblock-tech.png",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-background rounded-3xl overflow-hidden border border-primary/30 hover:border-primary hover:ring-2 hover:ring-primary/30 shadow-sm hover:shadow-md transition-all"
              >
                {/* Image area with overflow effect - notice we removed object-contain */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-[100%] max-w-none object-cover object-center-top transform -translate-y-4"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Content area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              See What Your
              <br />
              <span className="text-primary">Neighbors Are Saying</span>
            </h2>
          </div>

          <ReactGoogleReviews
            layout="custom"
            featurableId={process.env.NEXT_PUBLIC_FEATURABLE_ID!}
            renderer={(reviews) => {
              return (
                <MasonryContainer>
                  {reviews.map(
                    ({
                      reviewId,
                      reviewer,
                      comment,
                      starRating,
                      createTime,
                    }) => (
                      <ReviewCard
                        key={reviewId}
                        review={{
                          reviewId,
                          reviewer,
                          comment,
                          starRating,
                          createTime,
                        }}
                      />
                    )
                  )}
                </MasonryContainer>
              )
            }}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Save Big with Our
              <br />
              <span className="text-primary">Service Plans</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: "Monthly",
                discount: "$150 OFF",
                subtitle: "Per Cleaning",
                features: [
                  "Priority Scheduling",
                  "Weather Protection Guarantee",
                  "Free Touch-ups",
                  "10% Additional Service Discount",
                ],
                popular: false,
              },
              {
                plan: "Quarterly",
                discount: "$100 OFF",
                subtitle: "Per Cleaning",
                features: [
                  "Seasonal Deep Clean",
                  "Weather Protection Guarantee",
                  "Free Touch-ups",
                  "5% Additional Service Discount",
                ],
                popular: true,
              },
              {
                plan: "Bi-Annual",
                discount: "$50 OFF",
                subtitle: "Per Cleaning",
                features: [
                  "Spring & Fall Service",
                  "Weather Protection Guarantee",
                  "Free Touch-ups",
                  "Flexible Scheduling",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`relative bg-muted/40 ${
                  tier.popular
                    ? "border-primary shadow-lg scale-105 border-2"
                    : "border-primary/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{tier.plan}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tier.discount}
                  </div>
                  <CardDescription>{tier.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    // variant={tier.popular ? "default" : "outline"}
                    onClick={() => {
                      setValue("servicePlan", tier.plan.toLowerCase())
                      router.push("/#contact")
                    }}
                  >
                    Get Your Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">Proudly Serving</span>
              <br />
              The Tupelo Area
            </h2>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Service Area</CardTitle>
              <CardDescription>
                We provide professional window cleaning services throughout the
                greater Tupelo area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MapMarker />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready for spotless windows? Fill out the form below and we&apos;ll
              get back to you within 24 hours.
            </p>
          </div>

          <Card className=" drop-shadow-2xl bg-white border-primary/30 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
              <CardDescription className="text-center">
                Tell us about your window cleaning needs
              </CardDescription>
            </CardHeader>

            {/* Status Message */}
            {submitStatus && (
              <div className="mx-6 mb-6">
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-center">
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              </div>
            )}

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="your@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\+]?[1-9][\d]{0,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service Type Field */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      onValueChange={(value) => setValue("serviceType", value)}
                    >
                      <SelectTrigger
                        className={errors.serviceType ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="window-cleaning">
                          Window Cleaning
                        </SelectItem>
                        <SelectItem value="gutter-cleaning">
                          Gutter Cleaning
                        </SelectItem>
                        <SelectItem value="house-washing">
                          House Washing
                        </SelectItem>
                        <SelectItem value="pressure-washing">
                          Pressure Washing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      {...register("serviceType", {
                        required: "Please select a service type",
                      })}
                    />
                    {errors.serviceType && (
                      <p className="text-sm text-red-500">
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Plan Field */}
                  <div className="space-y-2">
                    <Label htmlFor="servicePlan">Service Plan (Optional)</Label>
                    <Select
                      value={watch("servicePlan")}
                      onValueChange={(value) => setValue("servicePlan", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">
                          One-Time Service
                        </SelectItem>
                        <SelectItem value="monthly">Monthly Plan</SelectItem>
                        <SelectItem value="quarterly">
                          Quarterly Plan
                        </SelectItem>
                        <SelectItem value="bi-annual">
                          Bi-Annual Plan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" {...register("servicePlan")} />
                    <p className="text-sm text-muted-foreground">
                      Choose a service plan for additional savings
                    </p>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address (Optional)</Label>
                    <Input
                      id="address"
                      {...register("address")}
                      placeholder="123 Main St, Tupelo, MS 38801"
                    />
                    <p className="text-sm text-muted-foreground">
                      Helps us provide a more accurate quote
                    </p>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your window cleaning needs, number of windows, any special requirements..."
                    className={`min-h-[120px] `}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section with Wavy Top */}
      <section className="relative">
        {/* Wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-background"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="bg-primary text-primary-foreground pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for a home makeover?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get your free quote today and experience the difference our
              professional cleaning services can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary" className="px-10 py-6">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src={"/logo-new.png"}
                alt="PrimeShine Logo"
                width={200}
                height={50}
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Window Cleaning</li>
                <li>Gutter Cleaning</li>
                <li>House Washing</li>
                <li>Pressure Washing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Contact
              </h4>
              <div className="space-y-2 text-muted-foreground">
                {/* <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div> */}
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>primeshinetupelo@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Hours
              </h4>
              <div className="text-muted-foreground">
                <p>Monday - Friday: 8am - 7pm</p>
                <p>Saturday - Sunday: 7am - 8pm</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/30 mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} PrimeShine Cleaning. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WindowCleanerWebsite
