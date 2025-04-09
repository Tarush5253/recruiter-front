import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Recruitr</h2>
            <p className="text-sm text-gray-500">
              Helping companies hire smarter and job seekers find their dream roles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><Instagram size={20} /></a>
              <a href="mailto:info@recruitr.com" className="text-gray-600 hover:text-blue-600"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Recruitr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
