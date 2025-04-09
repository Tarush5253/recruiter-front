import React, { useRef, useState } from "react";
import {
  Camera,
  Upload,
  MapPin,
  Phone,
  Mail,
  User,
  PenSquare,
  Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UpdateRecruiter() {
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null); // Changed to company logo
  const [logoName, setLogoName] = useState("");
  const [profileCompletion, setProfileCompletion] = useState(40);

  // State for editable fields
  const [companyName, setCompanyName] = useState("TechCorp Solutions");
  const [email, setEmail] = useState("recruitment@techcorp.com");
  const [location, setLocation] = useState("Bangalore");
  const [phone, setPhone] = useState("080-1234-5678");

  const [editingField, setEditingField] = useState(null);
  const [tempCompanyName, setTempCompanyName] = useState(companyName);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempPhone, setTempPhone] = useState(phone);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/") && file.size <= 1 * 1024 * 1024) {
      setLogoName(file.name);
    } else {
      alert("Please upload an image file under 1MB.");
    }
  };

  const startEditing = (field) => {
    setEditingField(field);
    setTempCompanyName(companyName);
    setTempEmail(email);
    setTempLocation(location);
    setTempPhone(phone);
  };

  const saveEditing = (field) => {
    switch (field) {
      case "companyName":
        setCompanyName(tempCompanyName);
        break;
      case "email":
        setEmail(tempEmail);
        break;
      case "location":
        setLocation(tempLocation);
        break;
      case "phone":
        setPhone(tempPhone);
        break;
    }
    setEditingField(null);
  };

  const cancelEditing = () => {
    setEditingField(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
          {/* Recruiter Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex justify-center md:justify-start">
              <div className="relative group w-44 h-44 sm:w-48 sm:h-48">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Company Logo"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <Briefcase className="w-24 h-24 text-gray-500" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 transition-all duration-500"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Camera className="w-6 h-6 text-indigo-600" />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  {profileCompletion}% Complete
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-4">
                {editingField === "companyName" ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempCompanyName}
                      onChange={(e) => setTempCompanyName(e.target.value)}
                      className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1"
                    />
                    <button
                      onClick={() => saveEditing("companyName")}
                      className="text-green-600 hover:text-green-800"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="text-red-600 hover:text-red-800"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                      {companyName}
                    </h1>
                    <PenSquare
                      className="w-7 h-7 text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors duration-200"
                      onClick={() => startEditing("companyName")}
                    />
                  </>
                )}
              </div>
              <p className="text-xl font-medium text-indigo-700">Recruitment Profile</p>
              <p className="text-gray-600 text-lg italic mb-6">Hiring Top Talent Since 2010</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto md:mx-0">
                {[
                  {
                    icon: MapPin,
                    text:
                      editingField === "location" ? (
                        <input
                          type="text"
                          value={tempLocation}
                          onChange={(e) => setTempLocation(e.target.value)}
                          className="font-medium text-gray-800 border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1 w-full"
                        />
                      ) : (
                        location
                      ),
                    isEditable: true,
                    field: "location",
                  },
                  {
                    icon: Phone,
                    text:
                      editingField === "phone" ? (
                        <input
                          type="text"
                          value={tempPhone}
                          onChange={(e) => setTempPhone(e.target.value)}
                          className="font-medium text-gray-800 border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1 w-full"
                        />
                      ) : (
                        phone
                      ),
                    isEditable: true,
                    field: "phone",
                  },
                  {
                    icon: Mail,
                    text:
                      editingField === "email" ? (
                        <input
                          type="email"
                          value={tempEmail}
                          onChange={(e) => setTempEmail(e.target.value)}
                          className="font-medium text-gray-800 border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1 w-full"
                        />
                      ) : (
                        email
                      ),
                    isEditable: true,
                    field: "email",
                  },
                  { icon: User, text: "Add Contact Person", isLink: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${
                      item.isLink
                        ? "text-indigo-600 hover:text-indigo-800"
                        : "text-gray-800"
                    } bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.isLink ? "text-indigo-600" : "text-gray-600"
                      }`}
                    />
                    {item.isEditable && editingField === item.field ? (
                      <div className="flex-1 flex items-center gap-2">
                        {item.text}
                        <button
                          onClick={() => saveEditing(item.field)}
                          className="text-green-600 hover:text-green-800 text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <span className="font-medium flex-1">{item.text}</span>
                        {item.isEditable && (
                          <PenSquare
                            className="w-5 h-5 text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors duration-200"
                            onClick={() => startEditing(item.field)}
                          />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-80 space-y-6 mt-6 md:mt-0">
              {[
                { text: "Post New Job", percentage: "↑ 10%" },
                { text: "Review Applicants", percentage: "↑ 5%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-orange-900">
                      {item.text}
                    </span>
                    <span className="text-green-600 text-sm font-bold">
                      {item.percentage}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 px-6 rounded-2xl shadow-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 font-semibold text-lg tracking-wide">
                Manage Job Postings
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-10">
            <div className="flex gap-12 border-b border-gray-200 pb-4 mb-10">
              <button className="px-6 py-3 text-gray-900 border-b-4 border-indigo-700 font-semibold text-xl tracking-wide bg-indigo-50 rounded-t-lg">
                View & Edit
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-md p-6 sticky top-8">
                  <h3 className="font-semibold text-2xl text-gray-900 mb-6 tracking-tight">
                    Quick Links
                  </h3>
                  {[
                    "Company Details",
                    "Industry Focus",
                    "Hiring Needs",
                    "Job Postings",
                    "Recruitment Stats",
                    "Company Benefits",
                    "About Us",
                    "Team",
                    "Contact Details",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex justify-between items-center py-3 px-4 text-sm text-gray-800 bg-gray-200 rounded-lg mb-3 hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-300 shadow-sm"
                    >
                      <span className="font-medium">{item}</span>
                      <button className="text-indigo-600 hover:text-indigo-900 font-semibold">
                        Add/Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-9 space-y-8">
                {[
                  {
                    title: "Company Details",
                    content: (
                      <div className="space-y-4 text-gray-800">
                        {[
                          "Industry: Technology",
                          "Size: 500-1000 employees",
                          "Founded: 2010",
                        ].map((item, index) => (
                          <p key={index}>
                            <span className="font-medium text-indigo-700">
                              {item.split(":")[0]}:
                            </span>{" "}
                            <span className="text-gray-600">
                              {item.split(":")[1]}
                            </span>
                          </p>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Industry Focus",
                    content: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Software Development",
                          "Cloud Computing",
                          "AI Solutions",
                          "Cybersecurity",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-indigo-200 transition-all duration-300 hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Hiring Needs",
                    content: (
                      <div className="space-y-4 text-gray-800">
                        {[
                          "Current Openings: 15",
                          "Urgent Roles: Senior Developer, Product Manager",
                          "Preferred Skills: React, AWS, Agile",
                        ].map((item, index) => (
                          <p key={index}>
                            <span className="font-medium text-indigo-700">
                              {item.split(":")[0]}:
                            </span>{" "}
                            <span className="text-gray-600">
                              {item.split(":")[1]}
                            </span>
                          </p>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Job Postings",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        List your active job postings here with details about
                        roles, requirements, and application process.
                      </p>
                    ),
                  },
                  {
                    title: "Recruitment Stats",
                    content: (
                      <div className="space-y-4 text-gray-800">
                        {[
                          "Applications Received: 250+",
                          "Hires This Year: 45",
                          "Average Time to Hire: 30 days",
                        ].map((item, index) => (
                          <p key={index}>
                            <span className="font-medium text-indigo-700">
                              {item.split(":")[0]}:
                            </span>{" "}
                            <span className="text-gray-600">
                              {item.split(":")[1]}
                            </span>
                          </p>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Company Benefits",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Describe the benefits your company offers to attract
                        top talent (e.g., health insurance, remote work, etc.).
                      </p>
                    ),
                  },
                  {
                    title: "About Us",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Provide a brief overview of your company’s mission,
                        vision, and culture to engage potential candidates.
                      </p>
                    ),
                  },
                  {
                    title: "Team",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Introduce key team members or departments involved in
                        the recruitment process.
                      </p>
                    ),
                  },
                  {
                    title: "Contact Details",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Additional contact information for candidates or HR
                        inquiries.
                      </p>
                    ),
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">
                        {section.title}
                      </h3>
                      <PenSquare className="w-7 h-7 text-gray-600 cursor-pointer hover:text-indigo-600 transition-colors duration-200 hover:rotate-12" />
                    </div>
                    {section.content}
                  </div>
                ))}

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">
                      Upload Company Logo
                    </h3>
                    <Upload className="w-7 h-7 text-gray-600" />
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-200 hover:bg-gray-300 transition-all duration-300">
                    {logoName ? (
                      <p className="text-gray-800 font-semibold text-lg">
                        Uploaded:{" "}
                        <span className="text-indigo-600 font-bold">
                          {logoName}
                        </span>
                      </p>
                    ) : (
                      <>
                        <p className="text-gray-700 mb-5 font-medium text-lg">
                          Upload Image (max 1MB)
                        </p>
                        <button
                          onClick={() => logoInputRef.current.click()}
                          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg tracking-wide hover:scale-105"
                        >
                          Upload Logo
                        </button>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      ref={logoInputRef}
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}