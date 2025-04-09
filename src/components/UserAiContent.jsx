
import { useState } from "react"
import {
  Newspaper,
  Lightbulb,
  Zap,
  BookOpen,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  BookOpenIcon,
  BarChart2,
} from "lucide-react"


function UserAiContent() {
    const [newsCategory, setNewsCategory] = useState("career")

  const aiNews = {
    career: [
      {
        title: "Top 5 skills employers are looking for in 2023",
        source: "Career Insights",
        time: "3 hours ago",
        summary:
          "Data analysis, cloud computing, and AI development continue to top the list of most in-demand skills, with soft skills like adaptability gaining importance.",
        relevance: 95,
      },
      {
        title: "How to stand out in technical interviews",
        source: "Tech Career Hub",
        time: "Yesterday",
        summary:
          "Beyond technical knowledge, hiring managers are increasingly looking for problem-solving approaches and communication skills during interviews.",
        relevance: 89,
      },
      {
        title: "Remote work opportunities expanding in tech sector",
        source: "Future of Work",
        time: "2 days ago",
        summary:
          "Companies are expanding their remote work policies, with 72% of tech firms now offering permanent remote positions for qualified candidates.",
        relevance: 87,
      },
    ],
    industry: [
      {
        title: "AI development roles see 40% salary increase",
        source: "Tech Salary Report",
        time: "5 hours ago",
        summary:
          "Specialists in machine learning and AI development are commanding significantly higher salaries as demand outpaces the supply of qualified professionals.",
        relevance: 92,
      },
      {
        title: "Startups vs. Enterprise: Career path comparison",
        source: "Career Decisions",
        time: "1 day ago",
        summary:
          "New analysis compares career growth, compensation, and job satisfaction between startup environments and established enterprises.",
        relevance: 88,
      },
    ],
  }

  const aiInsights = [
    {
      title: "Profile Optimization",
      description:
        "Adding cloud certification details could increase your profile views by 35% based on current market demand.",
      icon: TrendingUp,
    },
    {
      title: "Skill Gap Alert",
      description: "Consider learning Docker and Kubernetes to match 90% of your target job requirements.",
      icon: Zap,
    },
    {
      title: "Interview Preparation",
      description: "Based on your applications, prepare for system design questions which appear in 80% of interviews.",
      icon: GraduationCap,
    },
  ]

  const learningRecommendations = [
    {
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      duration: "4 hours",
      matchScore: 95,
      reason: "Matches your career goals and current skill level",
    },
    {
      title: "Microservices Architecture",
      provider: "Coursera",
      duration: "6 weeks",
      matchScore: 88,
      reason: "Trending in your job applications",
    },
    {
      title: "Data Structures & Algorithms",
      provider: "Udemy",
      duration: "10 hours",
      matchScore: 92,
      reason: "Required for 85% of your saved jobs",
    },
  ]

    return (
        <>
            {/* AI Career Assistant Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">AI Career Assistant</h2>
                    <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">View All</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* AI Insights Column */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                                <Lightbulb className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="font-bold text-gray-900">Personalized Insights</h3>
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
                                Get More Insights
                            </button>
                        </div>
                    </div>

                    {/* AI News Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-3">
                            <div className="flex items-center">
                                <Newspaper className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="font-bold text-gray-900">Career News & Trends</h3>
                            </div>
                            <div className="ml-auto flex items-center">
                                <button
                                    className={`px-3 py-1 text-xs rounded-md mr-2 ${newsCategory === "career" ? "bg-blue-100 text-blue-800" : "text-gray-500 hover:bg-gray-100"}`}
                                    onClick={() => setNewsCategory("career")}
                                >
                                    Career
                                </button>
                                <button
                                    className={`px-3 py-1 text-xs rounded-md ${newsCategory === "industry" ? "bg-blue-100 text-blue-800" : "text-gray-500 hover:bg-gray-100"}`}
                                    onClick={() => setNewsCategory("industry")}
                                >
                                    Industry
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {aiNews[newsCategory].map((news, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
                                            <span className="text-xs font-medium text-blue-800">{news.relevance}% relevant</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">{news.summary}</p>
                                    <div className="mt-3 flex justify-between items-center">
                                        <button className="text-sm text-[#2563eb] hover:text-blue-700 font-medium">Read More</button>
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

            {/* AI Learning Recommendations */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <BookOpenIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <h2 className="text-xl font-bold text-gray-900">AI Learning Recommendations</h2>
                    </div>
                    <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {learningRecommendations.map((course, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-gray-900">{course.title}</h3>
                                <div className="bg-blue-100 px-2 py-1 rounded-full">
                                    <span className="text-xs font-medium text-blue-800">{course.matchScore}%</span>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <span>{course.provider}</span>
                                <span className="mx-2">•</span>
                                <span>{course.duration}</span>
                            </div>
                            <p className="mt-2 text-xs text-gray-600">
                                <span className="font-medium">Why this matters:</span> {course.reason}
                            </p>
                            <button className="mt-3 w-full py-1.5 bg-[#2563eb] text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                                Start Learning
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Job Match Analysis */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
                        <h2 className="text-xl font-bold text-gray-900">AI Job Match Analysis</h2>
                    </div>
                    <button className="text-[#2563eb] hover:text-blue-700 font-medium text-sm">Run New Analysis</button>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                            <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Your Job Match Score</h3>
                            <p className="text-sm text-gray-600">Based on your profile, skills, and experience</p>
                        </div>
                        <div className="ml-auto">
                            <div className="text-2xl font-bold text-blue-700">78%</div>
                            <p className="text-xs text-gray-500 text-right">+5% from last month</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-3 py-2">
                        <h4 className="font-medium text-gray-900">Strengths (3)</h4>
                        <ul className="mt-1 space-y-1">
                            <li className="text-sm text-gray-600">• Strong technical skills in React and Node.js</li>
                            <li className="text-sm text-gray-600">• Relevant project experience in e-commerce</li>
                            <li className="text-sm text-gray-600">• Good communication skills highlighted in recommendations</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-3 py-2">
                        <h4 className="font-medium text-gray-900">Improvement Areas (2)</h4>
                        <ul className="mt-1 space-y-1">
                            <li className="text-sm text-gray-600">• Limited experience with cloud technologies</li>
                            <li className="text-sm text-gray-600">• No certifications in relevant technologies</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-3 py-2">
                        <h4 className="font-medium text-gray-900">Recommended Actions</h4>
                        <ul className="mt-1 space-y-1">
                            <li className="text-sm text-gray-600">• Complete AWS certification (estimated +15% match)</li>
                            <li className="text-sm text-gray-600">• Add portfolio projects demonstrating cloud skills</li>
                            <li className="text-sm text-gray-600">• Update resume to highlight relevant experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAiContent