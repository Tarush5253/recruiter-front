import { LightbulbIcon } from "lucide-react"

export default function ContentCard({ title, content }) {
  return (
    <section className="bg-white shadow rounded-lg p-6 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 p-2 rounded-full mr-3">
          <LightbulbIcon className="h-5 w-5 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
