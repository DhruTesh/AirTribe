import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center space-x-8 p-4  bg-gray-900">
            <div className="flex items-center g space-x-4">
                <img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo" />
                <h1 className="text-white text-2xl font-bold">Airtribe</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/programs" className="text-gray-300 hover:text-white">Programs</Link>
                    </li>
                    <li>
                        <Link href="/events" className="text-gray-300 hover:text-white">Events</Link>
                    </li>
                    <li>
                        <Link href="/upskill" className="text-gray-300 hover:text-white">Upskill for free</Link>
                    </li>
                    <li>
                        <Link href="/reviews" className="text-gray-300 hover:text-white">Reviews</Link>
                    </li>
                    <li>
                        <Link href="/jobboard" className="text-gray-300 hover:text-white">Job board</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Sign up</Link>
            </div>
        </nav>
    );
};

export default Navbar;