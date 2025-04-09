import { useState } from "react"
import {
  Bell,
  Menu,
  Search,
  ChevronRight,
  ChevronLeft,
  User,
  Info,
  Facebook,
  Linkedin,
  Instagram,
  X,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UserAiContent from "../components/UserAiContent"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export default function EmployeeDashboard() {
  const {logout} = useAuth();
  const [currentBanner, setCurrentBanner] = useState(0)
  const navigate = useNavigate();
  const banners = [
    {
      title: "All India NCAT",
      description: "National Career Aptitude Test - Register now for better opportunities",
      cta: "Tell me more",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      title: "Shine as a Campus Ambassador",
      description: "Represent your college and gain leadership experience",
      cta: "Become Ambassador",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      title: "Virtual Job Fair",
      description: "Connect with top employers from the comfort of your home",
      cta: "Register Now",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ]

  const careerPaths = [
    {
      role: "Full Stack Developer",
      readiness: 75,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      role: "Cloud Engineer",
      readiness: 60,
      skills: ["AWS", "DevOps", "Docker"],
    },
    {
      role: "Data Scientist",
      readiness: 45,
      skills: ["Python", "ML", "Statistics"],
    },
    {
      role: "UX Designer",
      readiness: 80,
      skills: ["UI/UX", "Figma", "User Research"],
    },
  ]

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navbar */}
     <Navbar/>

      {/* Main Content */}
      <div className="pt-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Sidebar Profile Card */}
              <div className="w-full md:w-1/4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                        <User className="h-12 w-12" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-white flex items-center justify-center border-2 border-white shadow">
                        <div className="h-full w-full rounded-full bg-[#2563eb] flex items-center justify-center text-white text-xs font-bold">
                          42%
                        </div>
                      </div>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-500">BCA Computers @ XYZ University</p>
                    <button onClick={()=>navigate("/profile")} className="mt-4 w-full bg-[#2563eb] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Complete Profile
                    </button>

                    <div className="mt-6 w-full">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-gray-700">Profile performance</h3>
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Search appearances</span>
                          <span className="text-sm font-medium text-gray-900">6</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Recruiter actions</span>
                          <span className="text-sm font-medium text-gray-900">3</span>
                        </div>
                        <div className="flex justify-between cursor-pointer" onClick={logout}>
                          <span className="text-sm text-gray-600">Logout</span>
                          <span className="text-sm font-medium text-gray-900">{">"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white rounded-lg shadow p-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-800">TCS</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">TCS viewed your profile</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-green-800">IBM</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Application submitted to IBM</p>
                        <p className="text-xs text-gray-500">5 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-purple-800">MS</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Microsoft saved your resume</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="w-full md:w-3/4">
                {/* Banner Section */}
                <div className="relative bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="relative h-48 bg-gradient-to-r from-blue-50 to-blue-100 p-6">
                    <button
                      onClick={prevBanner}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>

                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{banners[currentBanner].title}</h2>
                        <p className="mt-1 text-gray-600 max-w-xl">{banners[currentBanner].description}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <button className="bg-[#2563eb] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                          {banners[currentBanner].cta}
                        </button>
                
                      </div>
                    </div>

                    <button
                      onClick={nextBanner}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex justify-center p-2">
                    {banners.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentBanner(index)}
                        className={`h-2 w-2 rounded-full mx-1 ${index === currentBanner ? "bg-[#2563eb]" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Pathfinder Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Discover the career path that's right for you!
                      </h2>
                      <p className="text-gray-600">
                        Explore roles, check your readiness, and get a personalized learning plan.
                      </p>
                    </div>
                    <button className="text-[#2563eb] hover:text-blue-700 font-medium">View All</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {careerPaths.map((path, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-gray-900">{path.role}</h3>
                        <div className="mt-2 flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-[#2563eb] h-2.5 rounded-full"
                              style={{ width: `${path.readiness}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{path.readiness}%</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {path.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opportunities Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Recommended Opportunities</h2>
                    <button className="text-[#2563eb] hover:text-blue-700 font-medium">View All</button>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900">Software Developer Intern</h3>
                            <p className="text-gray-600">Acme Corporation</p>
                            <div className="mt-2 flex items-center space-x-4">
                              <span className="text-sm text-gray-500">Remote</span>
                              <span className="text-sm text-gray-500">₹15-20K/month</span>
                              <span className="text-sm text-gray-500">Immediate</span>
                            </div>
                          </div>
                          {/* <img src="/placeholder.svg?height=40&width=40" alt="Company logo" className="h-10 w-10" /> */}
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">React</span>
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">JavaScript</span>
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Node.js</span>
                          </div>
                          <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">Apply Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Your Application Stats</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Applications</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Interviews</p>
                      <p className="text-2xl font-bold text-gray-900">4</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Offers</p>
                      <p className="text-2xl font-bold text-gray-900">2</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Profile Views</p>
                      <p className="text-2xl font-bold text-gray-900">28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserAiContent/>

      {/* Footer */}
      {/* <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <span className="text-xl font-bold text-[#2563eb]">Recruitr</span>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <X className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Jobs
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <p className="mt-8 text-center md:mt-0 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Recruitr. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  )
}
