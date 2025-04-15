"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
	return (
		<section className="relative pt-[95px] w-full h-[75vh] bg-red-600 text-white flex items-center justify-center">
			<div className="text-center px-4 max-w-3xl">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					WEN – Women Entrepreneur Network
				</h1>
				<p className="text-lg md:text-xl mb-6">Connect | Collaborate | Grow</p>
				<div className="flex justify-center gap-4 flex-wrap">
					<button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transition">
						Join the Network
					</button>
					<Link
						href="https://chat.whatsapp.com/LTnBs4Y2Ge4Hsh0Pt6UitJ"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition">
						<FaWhatsapp className="text-lg" />
						Join WhatsApp Group
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header;
