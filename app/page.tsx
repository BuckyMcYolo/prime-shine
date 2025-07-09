"use client"

import React, { useState } from "react"
import {
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  ArrowRight,
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
import Image from "next/image"
import MapMarker from "@/components/map"
import { ReactGoogleReviews } from "react-google-reviews"
import { MasonryContainer } from "@/components/reviews/masonry-container"
import { ReviewCard } from "@/components/reviews/review-card"

const WindowCleanerWebsite = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dirty Windows?
              <br />
              <span className="text-blue-400">We can fix that</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Professional window cleaning services that leave your windows
              spotless and streak-free. Satisfaction guaranteed.
            </p>
            <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-lg font-bold text-white transition-all hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 cursor-pointer">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
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
                className="bg-white dark:bg-neutral-800/50 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 hover:dark:border-blue-700 shadow-sm hover:shadow-md transition-all"
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
      {/* CTA Section with Wavy Top */}
      <section className="relative" id="cta">
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
              className="fill-white"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="bg-primary text-primary-foreground pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Crystal Clear Windows?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get your free quote today and experience the difference
              professional window cleaning makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-10 py-6">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src={"/logo.png"}
                alt="PrimeShine Logo"
                width={150}
                height={50}
              />
              {/* <p className="text-muted-foreground">
                Professional window cleaning services you can trust.
              </p> */}
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
                  <span>info@primeshinecleaning.com</span>
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
            <p>&copy; 2024 PrimeShine Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WindowCleanerWebsite
