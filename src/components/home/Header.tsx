"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
	return (
		<section className="relative pt-[95px] w-full h-[75vh] bg-gradient-to-r from-red-600 to-red-800 text-black backdrop-blur flex items-center justify-center">
			<div className="text-center px-4 max-w-3xl">
				<p className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-300 animate-text">
					Connect Collaborate Grow
				</p>
				<div className="flex justify-center gap-4 flex-wrap">
					<button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transition ease-in-out duration-300">
						Join the Network
					</button>

					<Link
						href="https://chat.whatsapp.com/LTnBs4Y2Ge4Hsh0Pt6UitJ"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition ease-in-out duration-300">
						<FaWhatsapp className="text-lg" />
						Free WhatsApp Open Group
					</Link>

					<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition ease-in-out duration-300">
						Next Meetings
					</button>
				</div>
			</div>
		</section>
	);
};

export default Header;
