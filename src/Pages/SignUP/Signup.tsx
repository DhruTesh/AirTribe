"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        whatsappUpdates: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://example.com/api/signup', formData);
            console.log('Signup successful:', response.data);
            alert('Signup successful!');
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-2/4 flex bg-white">
                
                {/* Left Section */}
                <div className="w-1/2 bg-gradient-to-b from-purple-900 to-purple-700 text-white p-10 flex flex-col justify-center items-start">
                    <div className="flex space-x-2 mb-4">
                        <img src="https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg" alt="Profile 1" className="rounded-full" width={50} height={50} />
                        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_289,dpr_2/f_auto,q_auto/v1706089499/ideas-and-advice-prod/en-us/attachment_43805737-e1494006955649/attachment_43805737-e1494006955649.jpg?_i=AA" alt="Profile 2" className="rounded-full" width={50} height={50} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcRk469yihqTdrwpvbiPoovqlsbP2rcRjxEXHFChvOlj-vkaSIj3EZ-CnFBb1t4FQsvc&usqp=CAU" alt="Profile 3" className="rounded-full" width={50} height={50} />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Welcome to Airtribe <span className="text-yellow-400">✨</span></h1>
                    <p className="text-lg mb-6">Expert-led training courses to accelerate your professional development</p>
                    <p className="text-lg underline flex items-center">Sign up to get started </p>
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-10 flex flex-col justify-center items-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Create account</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIJbX-6MVfN4u1_xWs8A7eADfLg1lU9k7oA&s" alt="Country flag" className="ml-3" width={30} height={20} />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="w-full p-3 border-none focus:ring-0"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="whatsapp-updates"
                                    name="whatsappUpdates"
                                    checked={formData.whatsappUpdates}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="whatsapp-updates" className="text-sm">Send me updates over WhatsApp</label>
                            </div>
                            <button type="submit" className="w-full bg-purple-200 text-purple-700 p-3 rounded-lg font-semibold">Create Account</button>
                        </form>
                        <div className="flex items-center my-6">
                            <hr className="w-full border-gray-300" />
                            <span className="px-3 text-gray-500">OR</span>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <button className="w-full bg-white border border-gray-300 text-gray-700 p-3 rounded-lg flex items-center justify-center">
                            <img src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png" alt="Google logo" className="mr-2" width={20} height={20} />
                            Continue with Google
                        </button>
                        <p className="text-sm text-gray-500 mt-6">Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;
