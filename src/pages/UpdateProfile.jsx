import React, { useRef, useState } from "react";
import {
  Camera,
  Upload,
  MapPin,
  Phone,
  Mail,
  Cake,
  User,
  PenSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UpdateProfile() {
  const fileInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const [profileCompletion, setProfileCompletion] = useState(40);

  const [name, setName] = useState("Tarush Ruhela");
  const [email, setEmail] = useState("tarush@hotmail");
  const [city, setCity] = useState("Ghaziabad");
  const [phone, setPhone] = useState("11111111111");

  const [editingField, setEditingField] = useState(null);

  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempCity, setTempCity] = useState(city);
  const [tempPhone, setTempPhone] = useState(phone);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 1 * 1024 * 1024
    ) {
      setResumeName(file.name);
    } else {
      alert("Please upload a PDF file under 1MB.");
    }
  };

  const startEditing = (field) => {
    setEditingField(field);
    setTempName(name);
    setTempEmail(email);
    setTempCity(city);
    setTempPhone(phone);
  };

  const saveEditing = (field) => {
    switch (field) {
      case "name":
        setName(tempName);
        break;
      case "email":
        setEmail(tempEmail);
        break;
      case "city":
        setCity(tempCity);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden mt-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex justify-center md:justify-start">
              <div className="relative group w-44 h-44 sm:w-48 sm:h-48">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <User className="w-24 h-24 text-gray-500" />
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
                {editingField === "name" ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1"
                    />
                    <button
                      onClick={() => saveEditing("name")}
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
                      {name}
                    </h1>
                    <PenSquare
                      className="w-7 h-7 text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors duration-200"
                      onClick={() => startEditing("name")}
                    />
                  </>
                )}
              </div>
              <p className="text-xl font-medium text-indigo-700">BCA</p>
              <p className="text-gray-600 text-lg italic mb-6">
                Institute of Applied Medicines and Research (IAMR), Ghaziabad
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto md:mx-0">
                {[
                  {
                    icon: MapPin,
                    text:
                      editingField === "city" ? (
                        <input
                          type="text"
                          value={tempCity}
                          onChange={(e) => setTempCity(e.target.value)}
                          className="font-medium text-gray-800 border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 px-2 py-1 w-full"
                        />
                      ) : (
                        city
                      ),
                    isEditable: true,
                    field: "city",
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
                  { icon: User, text: "Add Gender", isLink: true },
                  { icon: Cake, text: "Add Birthday", isLink: true },
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
                { text: "Add Details", percentage: "↑ 8%" },
                { text: "Add Competitive Exam", percentage: "↑ 6%" },
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
                Add 13 Missing Details
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
                    "Your career preferences",
                    "Education",
                    "Key skills",
                    "Languages",
                    "Internships",
                    "Projects",
                    "Profile(summary",
                    "Accomplishments",
                    "Employment",
                    "Academic achievements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex justify-between items-center py-3 px-4 text-sm text-gray-800 bg-gray-200 rounded-lg mb-3 hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-300 shadow-sm"
                    >
                      <span className="font-medium">{item}</span>
                      <button className="text-indigo-600 hover:text-indigo-900 font-semibold">
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-9 space-y-8">
                {[
                  {
                    title: "Your career preferences",
                    content: (
                      <div className="space-y-4 text-gray-800">
                        {[
                          "Preferred job type: Add desired job type",
                          "Availability to work: Add work availability",
                          "Preferred location: Add preferred work location",
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
                    title: "Education",
                    content: (
                      <div className="space-y-5 text-gray-800">
                        {[
                          {
                            title: "BCA",
                            subtitle:
                              "Institute of Applied Medicines and Research (IAMR), Ghaziabad",
                            detail: "Graduating in 2026, Full Time",
                          },
                          {
                            title: "Class XII",
                            detail:
                              "Scored Percentage, Passed out in Passing Year",
                          },
                          {
                            title: "Class X",
                            detail:
                              "Scored Percentage, Passed out in Passing Year",
                          },
                        ].map((edu, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <p>
                              <span className="font-medium text-indigo-700">
                                {edu.title}
                              </span>{" "}
                              {edu.subtitle && `- ${edu.subtitle}`}
                            </p>
                            <p className="text-gray-600 mt-1">{edu.detail}</p>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Key skills",
                    content: (
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Web Development",
                          "Front End Engineer",
                          "Frontend Web Developer",
                          "UI Development",
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
                    title: "Languages",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Talk about the languages that you can speak, read or
                        write
                      </p>
                    ),
                  },
                  {
                    title: "Internships",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Talk about the company you interned at, what projects
                        you undertook and what special skills you learned
                      </p>
                    ),
                  },
                  {
                    title: "Projects",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Talk about your projects that made you proud and
                        contributed to your learnings
                      </p>
                    ),
                  },
                  {
                    title: "Profile Summary",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Your Profile Summary should mention the highlights of
                        your career and education, what your professional
                        interests are, and what kind of a career you are looking
                        for. Write a meaningful summary of more than 50
                        characters.
                      </p>
                    ),
                  },
                  {
                    title: "Accomplishments",
                    content: (
                      <div className="space-y-5 text-gray-800">
                        {[
                          {
                            title: "Certifications",
                            text: "Talk about any certified courses that you completed",
                          },
                          {
                            title: "Awards",
                            text: "Talk about any special recognitions that you received that makes you proud",
                          },
                          {
                            title: "Club & committees",
                            text: "Add details of position of responsibilities that you have held",
                          },
                          {
                            title: "Competitive exams",
                            text: "Talk about any competitive exam that you appeared for and the rank received",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <p>
                              <span className="font-medium text-indigo-700">
                                {item.title}
                              </span>
                            </p>
                            <p className="text-gray-600 mt-1 leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Employment",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Talk about the company you worked at, your designation
                        and describe what all you did there
                      </p>
                    ),
                  },
                  {
                    title: "Academic achievements",
                    content: (
                      <p className="text-gray-800 leading-relaxed">
                        Talk about any academic achievement whether in college
                        or school that deserves a mention
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
                      Upload Your Resume
                    </h3>
                    <Upload className="w-7 h-7 text-gray-600" />
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-200 hover:bg-gray-300 transition-all duration-300">
                    {resumeName ? (
                      <p className="text-gray-800 font-semibold text-lg">
                        Uploaded:{" "}
                        <span className="text-indigo-600 font-bold">
                          {resumeName}
                        </span>
                      </p>
                    ) : (
                      <>
                        <p className="text-gray-700 mb-5 font-medium text-lg">
                          Upload PDF (max 1MB)
                        </p>
                        <button
                          onClick={() => resumeInputRef.current.click()}
                          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg tracking-wide hover:scale-105"
                        >
                          Upload Resume
                        </button>
                      </>
                    )}
                    <input
                      type="file"
                      accept="application/pdf"
                      ref={resumeInputRef}
                      onChange={handleResumeUpload}
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
