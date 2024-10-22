import React from 'react';
import './App.css'; // Make sure to import your styles if needed

const App: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            {/* Left Section */}
            <div className="w-1/3 p-8">
                <div className="flex items-center mb-8">
                    <div className="bg-purple-700 p-4 rounded-full">
                        <i className="fas fa-code text-4xl text-white"></i>
                    </div>
                    <span className="ml-4 text-3xl font-bold">code.ds</span>
                </div>
                <h1 className="text-4xl font-bold text-pink-400 mb-4">code.ds - DSA Problem Solving</h1>
                <p className="text-lg">
                    Elevate your coding skills with our carefully selected data structure and algorithm problems. Start your problem-solving journey now!
                </p>
            </div>
            {/* Right Section */}
            <div className="w-2/3 p-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-500">Problems</h2>
                    <div className="flex space-x-4">
                        <i className="fas fa-user text-2xl"></i>
                        <i className="fas fa-sign-out-alt text-2xl"></i>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                    {[
                        "Two Sum",
                        "Add Two Numbers",
                        "Median of Two Sorted Arrays",
                        "Longest Palindromic Substring",
                        "Zigzag Conversion",
                        "Reverse Integer",
                        "String To Integer",
                        "Integer To Roman",
                    ].map((problem, index) => (
                        <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded">
                            <span className="text-xl font-bold">{`${index + 1}. ${problem}`}</span>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">SOLVE</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;