import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
    const { user, login:log } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const validateForm = () => {
        if (!email.trim()) {
            setError("Email is required");
            return false;
        }
        if (!password.trim()) {
            setError("Password is required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return false;
        }

        return true;
    };

    const login = async (e) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) return;

        setIsLoading(true);


        try {
            const res = await API.post("/auth/login", { email, password });

            if (!res.data || !res.data.token || !res.data.role) {
                throw new Error("Invalid response from server");
            }
            log(res.data.token);
            // localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);

            if (res.data.role === "user") {
                navigate("/dashboard/user");
            } else if (res.data.role === "employee") {
                navigate("/dashboard/employee");
            } else {
                throw new Error("Unknown role");
            }
        } catch (err) {
            setError(err.message || "Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mx-auto max-w-8xl -mb-12">
                <form
                    onSubmit={login}
                    className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-4"
                >
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 rounded-md focus:outline-none text-slate-800  focus:ring-2 focus:ring-gray-500 transition-all duration-200 border-gray-700 border-2"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full border-gray-700 border-2 text-slate-800 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start animate-fade-in">
                            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                                      1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                    </button>

                    <div className="text-center text-sm text-gray-500 mt-4">
                        <p>don't have account: <a href="\register"  className="text-blue-400 underline">register</a></p>

                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Login;
