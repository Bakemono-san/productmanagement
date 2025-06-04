"use client";
import { Logout } from "@/Service/Api/api";
import {
  Menu,
  X,
  User,
  ShoppingBag,
  Grid3X3,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const logout = () => {
    Logout();
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.location.href = "/auth/login";
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 py-2">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Product Manager
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/products"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/categories"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Categories</span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="cursor-pointer flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                  <p
                    onClick={logout}
                    className="block cursor-pointer px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-purple-200 hover:from-blue-600 hover:to-purple-700 rounded-lg mx-2 mt-2 text-center transition-all duration-200"
                  >
                    Sign Out
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </Link>
              <Link
                href="/products"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="font-medium">Products</span>
              </Link>
              <Link
                href="/categories"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <Grid3X3 className="w-5 h-5" />
                <span className="font-medium">Categories</span>
              </Link>

              <div className="border-t border-gray-200 my-2"></div>

              <button onClick={logout}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
