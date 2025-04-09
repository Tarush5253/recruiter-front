"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Search, Briefcase, Building, MapPin, TrendingUp, Users, Star, ChevronRight } from "lucide-react"
import React from "react"

// Custom Button component
const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
      ghost: "bg-transparent hover:bg-gray-100",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3 text-sm",
    }

    const variantStyle = variants[variant] || variants.default
    const sizeStyle = sizes[size] || sizes.default

    return (
      <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

// Custom Input component
const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Custom Card components
const Card = ({ className = "", ...props }) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`} {...props} />
  )
}

const CardContent = ({ className = "", ...props }) => {
  return <div className={`p-6 ${className}`} {...props} />
}

// Custom Tabs components
const TabsContext = React.createContext({ value: "", onValueChange: (value) => {} })

const Tabs = ({ defaultValue, value, onValueChange, className = "", children, ...props }) => {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "")

  const handleValueChange = React.useCallback(
    (newValue) => {
      setTabValue(newValue)
      onValueChange?.(newValue)
    },
    [onValueChange],
  )

  return (
    <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
      <div className={`w-full ${className}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ className = "", ...props }) => {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 ${className}`}
      role="tablist"
      {...props}
    />
  )
}

const TabsTrigger = ({ value, className = "", children, ...props }) => {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext)
  const isSelected = selectedValue === value

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 ${
        isSelected ? "bg-white text-blue-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
      } ${className}`}
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, className = "", children, ...props }) => {
  const { value: selectedValue } = React.useContext(TabsContext)
  const isSelected = selectedValue === value

  if (!isSelected) return null

  return (
    <div
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`}
      role="tabpanel"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}

// Custom Badge component
const Badge = ({ variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
  }

  const variantStyle = variants[variant] || variants.default

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyle} ${className}`}
      {...props}
    />
  )
}

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 md:py-20 mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Find Your Dream Job Now</h1>
            <p className="text-lg text-blue-100 mb-8">Search from over 2 million+ jobs & career opportunities</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <Tabs defaultValue="job" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="job">Search Jobs</TabsTrigger>
                <TabsTrigger value="company">Search Companies</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Search</TabsTrigger>
              </TabsList>
              <TabsContent value="job" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Skills, Designations, Companies" className="pl-10" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Location" className="pl-10" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
              </TabsContent>
              <TabsContent value="company" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Company Name" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Industry" className="pl-10" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Keywords" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Experience" className="pl-10" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Categories</h2>
            <p className="text-gray-600">Explore opportunities across industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Briefcase className="h-6 w-6" />, title: "IT Jobs", count: "12,568" },
              { icon: <Building className="h-6 w-6" />, title: "Banking", count: "5,423" },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Sales", count: "8,721" },
              { icon: <Users className="h-6 w-6" />, title: "HR", count: "3,842" },
              { icon: <Briefcase className="h-6 w-6" />, title: "Marketing", count: "6,125" },
              { icon: <Building className="h-6 w-6" />, title: "Engineering", count: "9,354" },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Healthcare", count: "4,287" },
              { icon: <Users className="h-6 w-6" />, title: "Education", count: "2,936" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="bg-blue-100 p-3 rounded-full mb-4 text-blue-600">{category.icon}</div>
                  <h3 className="font-medium text-lg mb-1">{category.title}</h3>
                  <p className="text-gray-500 text-sm">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
            <Button variant="outline" className="flex items-center gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                company: "Tech Solutions Inc.",
                role: "Senior Software Engineer",
                location: "Bangalore",
                salary: "₹18-25 LPA",
                tags: ["Remote", "5-8 yrs"],
              },
              {
                company: "Global Finance",
                role: "Financial Analyst",
                location: "Mumbai",
                salary: "₹10-15 LPA",
                tags: ["Hybrid", "3-5 yrs"],
              },
              {
                company: "Healthcare Plus",
                role: "Medical Representative",
                location: "Delhi",
                salary: "₹6-9 LPA",
                tags: ["On-site", "2-4 yrs"],
              },
              {
                company: "Digital Marketing Pro",
                role: "SEO Specialist",
                location: "Hyderabad",
                salary: "₹8-12 LPA",
                tags: ["Remote", "3-6 yrs"],
              },
              {
                company: "EduTech Innovations",
                role: "Product Manager",
                location: "Pune",
                salary: "₹15-22 LPA",
                tags: ["Hybrid", "4-7 yrs"],
              },
              {
                company: "Retail Giants",
                role: "Store Manager",
                location: "Chennai",
                salary: "₹7-10 LPA",
                tags: ["On-site", "5+ yrs"],
              },
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gray-100 p-3 rounded-md">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{job.role}</h3>
                  <p className="text-gray-600 mb-3">{job.company}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{job.location}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Top Companies Hiring</h2>
            <p className="text-gray-600">Opportunities from leading employers</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                    <Building className="h-8 w-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { count: "10M+", label: "Active Job Seekers" },
              { count: "500K+", label: "Jobs Available" },
              { count: "75K+", label: "Recruiters" },
              { count: "2M+", label: "Successful Placements" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.count}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the Job Search App</h2>
                <p className="text-gray-600 mb-6">
                  Download our app and never miss a job opportunity. Get instant notifications for jobs matching your
                  profile.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black hover:bg-gray-800">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5,2H8.5L3,7.5v9L8.5,22h9l5.5-5.5v-9L17.5,2z M12,17.5c-2.75,0-5-2.25-5-5s2.25-5,5-5s5,2.25,5,5S14.75,17.5,12,17.5z" />
                    </svg>
                    Google Play
                  </Button>
                  <Button className="bg-black hover:bg-gray-800">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    App Store
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-2 rounded-xl shadow-lg w-56">
                  <div className="bg-blue-600 rounded-lg p-4 text-white text-center mb-4">
                    <h3 className="font-bold">Job Search App</h3>
                  </div>
                  <div className="space-y-3 px-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="bg-gray-100 h-12 rounded-md"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
