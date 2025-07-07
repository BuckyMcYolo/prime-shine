"use client"

import React, { useState } from "react"
import { Star, CheckCircle, Phone, Mail, MapPin, Menu } from "lucide-react"
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
import Nav from "@/components/nav/nav"

const WindowCleanerWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {/* Navigation */}
      <nav className="relative border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">CrystalClear</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex">Get Quote</Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50 md:hidden">
            <div className="px-4 py-4 space-y-2">
              <a
                href="#services"
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#pricing"
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              <div className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 dark:from-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Dirty Windows?
              <br />
              <span className="text-primary">We can fix that</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional window cleaning services that leave your windows
              spotless and streak-free. Satisfaction guaranteed.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Get Your Free Quote
            </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspect",
                desc: "We assess your windows and identify any specific cleaning needs",
              },
              {
                step: "2",
                title: "Scrub",
                desc: "Deep clean with professional-grade solutions to remove all dirt and grime",
              },
              {
                step: "3",
                title: "Squeegee",
                desc: "Perfect streak-free finish using professional squeegee techniques",
              },
              {
                step: "4",
                title: "Protection",
                desc: "Apply protective coating for longer-lasting cleanliness",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-none">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              See What Your
              <br />
              <span className="text-primary">Neighbors Are Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Absolutely amazing service! My windows have never looked better. The team was professional and thorough.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                text: "Great value for money. They showed up on time and did exactly what they promised. Highly recommend!",
                rating: 5,
              },
              {
                name: "Emily Davis",
                text: "I've been using their monthly service for a year now. Consistent quality and friendly staff every time.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;{review.text}&quot;
                  </p>
                  <p className="font-semibold text-foreground">
                    - {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Save Big with Our
              <br />
              <span className="text-primary">Service Plans</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: "Monthly",
                discount: "$25 OFF",
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
                discount: "$15 OFF",
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
                discount: "$10 OFF",
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
                className={`relative ${
                  tier.popular ? "border-primary shadow-lg scale-105" : ""
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
                    variant={tier.popular ? "default" : "outline"}
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
              Your Local Area
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Downtown",
              "Midtown",
              "Westside",
              "Eastside",
              "North Hills",
              "South Bay",
              "Riverside",
              "Valley View",
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Crystal Clear Windows?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get your free quote today and experience the difference professional
            window cleaning makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                CrystalClear
              </h3>
              <p className="text-muted-foreground">
                Professional window cleaning services you can trust.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Residential Windows</li>
                <li>Commercial Windows</li>
                <li>Pressure Washing</li>
                <li>Gutter Cleaning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Contact
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@crystalclear.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Hours
              </h4>
              <div className="text-muted-foreground">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 CrystalClear Window Cleaning. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WindowCleanerWebsite
