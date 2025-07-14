"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Project data
const projectData = {
  title: "Weather App",
  description:
    "A simple weather application that allows users to check current weather conditions in any city using external weather APIs. Built with Flutter for cross-platform compatibility.",
  category: "Mobile",
  mainImage: "/placeholder.svg?height=600&width=800",
  arrayImage: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  github: "https://github.com/username/weather-app",
  downloadLink: "https://example.com/downloads/weather-app.apk",
}

// Similar projects data
const similarProjects = [
  {
    id: 1,
    title: "Fitness Tracker",
    description: "Track your daily workouts and fitness goals",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile",
  },
  {
    id: 2,
    title: "Recipe App",
    description: "Discover and save your favorite recipes",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Organize your tasks and boost productivity",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile",
  },
]

export default function ProjectDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === projectData.arrayImage.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectData.arrayImage.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{projectData.title}</h1>
            <Badge variant="secondary" className="mt-2">
              {projectData.category}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Image */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={projectData.mainImage || "/placeholder.svg"}
                    alt={projectData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Screenshots Gallery */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">App Screenshots</h3>
                <div className="relative">
                  <div className="aspect-square max-w-xs mx-auto relative overflow-hidden rounded-lg">
                    <Image
                      src={projectData.arrayImage[currentImageIndex] || "/placeholder.svg"}
                      alt={`Screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Navigation buttons */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Image indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {projectData.arrayImage.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Project Description</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{projectData.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Dart</Badge>
                  <Badge variant="outline">REST API</Badge>
                  <Badge variant="outline">HTTP</Badge>
                  <Badge variant="outline">JSON</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Key Features</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Real-time weather data for any city
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Clean and intuitive user interface
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    City search functionality
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Detailed weather information display
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href={projectData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <Link href={projectData.downloadLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Additional information */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Type:</span>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{projectData.category}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Platform:</span>
                    <p className="font-medium text-slate-900 dark:text-slate-100">Android & iOS</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Status:</span>
                    <p className="font-medium text-green-600">Completed</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Completion Date:</span>
                    <p className="font-medium text-slate-900 dark:text-slate-100">December 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Projects Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Similar Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Other {projectData.category.toLowerCase()} applications I've built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-950"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
