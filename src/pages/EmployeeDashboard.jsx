import { useState } from "react"
import {
    Lightbulb,
    BookOpen,
    Award,
  ChevronRight,
  ChevronLeft,
  User,
  Info,
  BarChart2,
  Zap,
  TrendingUp,
  X,
  Users,
  Briefcase,
  FileText,
  Calendar,
  Filter,
  Download,
  MoreHorizontal,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export default function RecruiterDashboard() {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const [currentBanner, setCurrentBanner] = useState(0)
    const [activeTab, setActiveTab] = useState("all")
    const [newsCategory, setNewsCategory] = useState("industry")

  const banners = [
    {
      title: "Premium Recruiter Plan",
      description: "Unlock advanced candidate filtering and unlimited job postings",
      cta: "Upgrade Now",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      title: "Virtual Hiring Event",
      description: "Host your next hiring event online with our virtual platform",
      cta: "Schedule Event",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      title: "AI Matching Technology",
      description: "Find the perfect candidates faster with our AI-powered matching",
      cta: "Learn More",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ]

  const candidates = [
    {
      name: "Priya Sharma",
      education: "B.Tech Computer Science @ IIT Delhi",
      skills: ["Java", "Spring Boot", "Microservices"],
      experience: "2 years",
      matchScore: 92,
      status: "New",
    },
    {
      name: "Rahul Verma",
      education: "MCA @ Delhi University",
      skills: ["React", "Node.js", "MongoDB"],
      experience: "3 years",
      matchScore: 87,
      status: "Contacted",
    },
    {
      name: "Ananya Patel",
      education: "B.E. Electronics @ BITS Pilani",
      skills: ["Python", "TensorFlow", "Data Analysis"],
      experience: "1 year",
      matchScore: 85,
      status: "Interviewing",
    },
    {
      name: "Vikram Singh",
      education: "MBA @ IIM Ahmedabad",
      skills: ["Product Management", "Agile", "JIRA"],
      experience: "4 years",
      matchScore: 78,
      status: "New",
    },
  ]

  const aiNews = {
    industry: [
      {
        title: "Tech hiring expected to grow 15% in Q3",
        source: "HR Today",
        time: "2 hours ago",
        summary:
          "According to recent analysis, tech sector hiring is projected to increase by 15% in the upcoming quarter, with particular demand for AI specialists and full-stack developers.",
        relevance: 92,
      },
      {
        title: "Remote work policies shifting among Fortune 500",
        source: "Business Insider",
        time: "Yesterday",
        summary:
          "A survey of Fortune 500 companies reveals that 68% are adopting hybrid work models permanently, with only 12% requiring full-time office presence.",
        relevance: 87,
      },
      {
        title: "New labor laws affecting recruitment practices",
        source: "Legal HR Review",
        time: "2 days ago",
        summary:
          "Recent legislative changes will require companies to adjust their hiring processes, particularly regarding candidate data privacy and automated screening tools.",
        relevance: 95,
      },
    ],
    company: [
      {
        title: "Competitor XYZ Corp announces expansion",
        source: "Tech Crunch",
        time: "4 hours ago",
        summary:
          "XYZ Corp has announced plans to open three new offices and hire 200+ employees in the next six months, potentially increasing competition for talent.",
        relevance: 89,
      },
      {
        title: "Industry salary benchmarks updated",
        source: "Compensation Weekly",
        time: "1 day ago",
        summary:
          "New salary data shows a 7% increase in compensation packages for senior developers and a 12% increase for data scientists across the industry.",
        relevance: 91,
      },
    ],
  }

  const aiInsights = [
    {
      title: "Candidate Response Patterns",
      description: "Candidates are 40% more likely to respond to outreach on Tuesdays and Wednesdays between 10am-2pm.",
      icon: TrendingUp,
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Current applicant pool lacks cloud security expertise. Consider adjusting job requirements or targeting specialized networks.",
      icon: Zap,
    },
    {
      title: "Retention Risk",
      description:
        "3 employees in the Engineering team match patterns of pre-resignation behavior. Proactive engagement recommended.",
      icon: BarChart2,
    },
  ]

  const jobPostings = [
    {
      title: "Senior Backend Developer",
      department: "Engineering",
      location: "Bangalore (Hybrid)",
      applicants: 42,
      views: 156,
      daysActive: 7,
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      applicants: 28,
      views: 98,
      daysActive: 5,
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      applicants: 35,
      views: 124,
      daysActive: 10,
    },
  ]

  const upcomingInterviews = [
    {
      candidate: "Rahul Verma",
      position: "Senior Backend Developer",
      date: "Today, 2:00 PM",
      type: "Technical Round",
    },
    {
      candidate: "Ananya Patel",
      position: "Data Scientist",
      date: "Tomorrow, 11:00 AM",
      type: "HR Round",
    },
    {
      candidate: "Karan Malhotra",
      position: "Product Manager",
      date: "23 Apr, 3:30 PM",
      type: "Final Round",
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
              {/* Left Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <User className="h-12 w-12" />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-900">Sarah Johnson</h2>
                    <p className="text-sm text-gray-500">HR Manager @ Acme Inc</p>
                    <button className="mt-4 w-full bg-[#2563eb] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" onClick={()=>navigate("/profile")}>
                      View Profile
                    </button>

                    <div className="mt-6 w-full">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-gray-700">Recruitment Stats</h3>
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Open positions</span>
                          <span className="text-sm font-medium text-gray-900">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Candidates in pipeline</span>
                          <span className="text-sm font-medium text-gray-900">42</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Interviews this week</span>
                          <span className="text-sm font-medium text-gray-900">12</span>
                        </div>
                        <div className="flex justify-between cursor-pointer" onClick={logout}>
                          <span className="text-sm text-gray-600">Logout</span>
                          <span className="text-sm font-medium text-gray-900">{">"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Interviews */}
                <div className="bg-white rounded-lg shadow p-6 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Upcoming Interviews</h3>
                    <button className="text-[#2563eb] hover:text-blue-700 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {upcomingInterviews.map((interview, index) => (
                      <div key={index} className="border-l-4 border-[#2563eb] pl-3 py-2">
                        <p className="text-sm font-medium text-gray-900">{interview.candidate}</p>
                        <p className="text-xs text-gray-500">{interview.position}</p>
                        <div className="mt-1 flex justify-between items-center">
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {interview.date}
                          </div>
                          <span className="text-xs font-medium text-[#2563eb]">{interview.type}</span>
                        </div>
                      </div>
                    ))}
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

                {/* Dashboard Summary */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recruitment Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                        <p className="text-sm text-gray-600">Active Jobs</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-sm text-gray-600">Total Candidates</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-yellow-600 mr-2" />
                        <p className="text-sm text-gray-600">Interviews</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-purple-600 mr-2" />
                        <p className="text-sm text-gray-600">Offers Sent</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                    </div>
                  </div>
                </div>

                {/* Top Candidates Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Top Candidates</h2>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                          <Filter className="h-4 w-4 mr-1" />
                          <span className="text-sm">Filter</span>
                        </button>
                      </div>
                      <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">View All</button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden border border-gray-200 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Candidate
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Skills
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Experience
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Match
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {candidates.map((candidate, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                      <User className="h-5 w-5" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                                      <div className="text-sm text-gray-500">{candidate.education}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex flex-wrap gap-1">
                                    {candidate.skills.map((skill, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {candidate.experience}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="h-2 w-16 bg-gray-200 rounded-full mr-2">
                                      <div
                                        className="h-2 bg-[#2563eb] rounded-full"
                                        style={{ width: `${candidate.matchScore}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{candidate.matchScore}%</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      candidate.status === "New"
                                        ? "bg-green-100 text-green-800"
                                        : candidate.status === "Contacted"
                                          ? "bg-blue-100 text-blue-800"
                                          : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {candidate.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button className="text-[#2563eb] hover:text-blue-700 mr-3">View</button>
                                  <button className="text-gray-500 hover:text-gray-700">
                                    <MoreHorizontal className="h-5 w-5" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">AI-Powered Insights</h2>
                    <div className="flex items-center">
                      <button
                        className={`px-3 py-1 text-sm rounded-md mr-2 ${newsCategory === "industry" ? "bg-blue-100 text-blue-800" : "text-gray-500 hover:bg-gray-100"}`}
                        onClick={() => setNewsCategory("industry")}
                      >
                        Industry
                      </button>
                      <button
                        className={`px-3 py-1 text-sm rounded-md ${newsCategory === "company" ? "bg-blue-100 text-blue-800" : "text-gray-500 hover:bg-gray-100"}`}
                        onClick={() => setNewsCategory("company")}
                      >
                        Company
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* AI Insights Column */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Lightbulb className="h-5 w-5 text-blue-600 mr-2" />
                          <h3 className="font-bold text-gray-900">AI Recommendations</h3>
                        </div>
                        <div className="space-y-3">
                          {aiInsights.map((insight, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-md mr-3">
                                  <insight.icon className="h-4 w-4 text-blue-700" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                                  <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-3 text-sm text-[#2563eb] hover:text-blue-700 font-medium">
                          View All Insights
                        </button>
                      </div>
                    </div>

                    {/* AI News Column */}
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        {aiNews[newsCategory].map((news, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold text-gray-900">{news.title}</h3>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <span>{news.source}</span>
                                  <span className="mx-2">•</span>
                                  <span>{news.time}</span>
                                </div>
                              </div>
                              <div className="bg-blue-100 px-2 py-1 rounded-full">
                                <span className="text-xs font-medium text-blue-800">{news.relevance}% match</span>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">{news.summary}</p>
                            <div className="mt-3 flex justify-between items-center">
                              <button className="text-sm text-[#2563eb] hover:text-blue-700 font-medium">
                                Read More
                              </button>
                              <div className="flex space-x-2">
                                <button className="text-gray-400 hover:text-gray-600">
                                  <BookOpen className="h-4 w-4" />
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                  <Award className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-2 text-sm text-[#2563eb] hover:text-blue-700 font-medium border border-gray-200 rounded-lg">
                          View More News
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Job Postings Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Active Job Postings</h2>
                    <div className="flex items-center">
                      <button className="flex items-center text-gray-500 hover:text-gray-700 mr-3">
                        <Download className="h-4 w-4 mr-1" />
                        <span className="text-sm">Export</span>
                      </button>
                      <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">Post New Job</button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden border border-gray-200 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Job Title
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Department
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Location
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Applicants
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Views
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Days Active
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {jobPostings.map((job, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{job.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                  {job.applicants}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.views}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.daysActive}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button className="text-[#2563eb] hover:text-blue-700 mr-3">Edit</button>
                                  <button className="text-gray-500 hover:text-gray-700">
                                    <MoreHorizontal className="h-5 w-5" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
