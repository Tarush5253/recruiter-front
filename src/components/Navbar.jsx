import React, { useState } from 'react';
import {
  Menu, X, User, Bell,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#2563eb]"><Link to="/">Recruitr</Link></span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/dashboard/user"
                className="border-[#2563eb] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Jobs
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Candidates
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Analytics
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {user ? <>
              <div className="relative mx-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm"
                  placeholder="Search candidates"
                  type="search"
                />
              </div>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 relative">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-100 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb]">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                      <User onClick={() => navigate("/profile")} className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              </div>
            </> : (
              <button
                onClick={() => navigate("/login")}
                className="ml-4 px-4 py-2 bg-[#2563eb] text-white rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2563eb]"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/dashboard/user" className="bg-[#2563eb] text-white block pl-3 pr-4 py-2 text-base font-medium">
              Dashboard
            </Link>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Candidates
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Analytics
            </a>
          </div>
          {user ? <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                  <User onClick={() => navigate("/profile")} className="h-6 w-6" />
                </div>
              </div>
              {user.role === 'employee' ? <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Sarah Johnson</div>
                <div className="text-sm font-medium text-gray-500">HR Manager @ Acme Inc</div>
              </div> :
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">John Doe</div>
                  <div className="text-sm font-medium text-gray-500">BCA Computers @ XYZ University</div>
                </div>
              }
              <button className="ml-auto p-1 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <div
                // href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={logout}
              >
                Sign out
              </div>
            </div>
          </div> :
            (
              <div className="pt-4 pb-3 border-t border-gray-200 px-4">
                <button
                  onClick={() => navigate("/login")}
                  className="w-full px-4 py-2 bg-[#2563eb] text-white rounded-md hover:bg-blue-600 transition text-center"
                >
                  Login
                </button>
              </div>
            )}
        </div>
      )}
    </nav>

  );
}

export default Navbar;
