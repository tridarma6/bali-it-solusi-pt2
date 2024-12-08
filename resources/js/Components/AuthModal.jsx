import React from "react";
import { Link } from "@inertiajs/react";
import X from "./Icons/X";

const AuthModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-gradient-to-r from-[#818080]  via-[#FFFFFF] to-[#FFFFFF] rounded-lg shadow-lg p-8 max-w-sm mx-auto transition-transform transform scale-100 hover:scale-105 relative">
                {/* Simbol Silang untuk Menutup Modal */}
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition duration-300"
                >
                    <X/>
                </button>

                <h2 className="text-2xl font-semibold text-center mb-4">Choose Your Action</h2>
                <p className="text-center mb-6 text-black">
                    You need to be logged in to proceed. Would you like to log in or sign up?
                </p>
                <div className="flex justify-around mb-6">
                    <Link 
                        href="/login" 
                        className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 text-lg text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 shadow-md"
                    >
                        Login
                    </Link>
                    <Link 
                        href="/register" 
                        className="bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-md"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
