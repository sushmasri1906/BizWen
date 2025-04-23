"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<section className="relative pt-[95px] w-full h-[65vh] bg-gradient-to-r from-red-600 to-red-800 text-black backdrop-blur flex items-center justify-center">
			<motion.div
				className="text-center px-4 max-w-5xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeInOut" }}>
				{/* Animated Text */}
				<motion.p
					className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center animate-pulse flex flex-wrap justify-center items-center gap-x-3 gap-y-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.3,
						duration: 1.2,
						ease: "easeInOut",
						staggerChildren: 0.3,
					}}>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						Connect
					</motion.span>
					<span className="hidden sm:inline">|</span>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						Collaborate
					</motion.span>
					<span className="hidden sm:inline">|</span>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}>
						Grow
					</motion.span>
				</motion.p>

				{/* Buttons Section */}
				<div className="flex justify-center gap-4 mt-10 flex-wrap">
					{/* Join the Network Button */}
					<motion.button
						className="bg-white text-red-600 px-6 py-2 text-lg font-semibold hover:bg-red-100 transition ease-in-out duration-300 border-2 border-red-600"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 300 }}>
						Join the Network
					</motion.button>

					{/* WhatsApp Link Button */}
					<motion.a
						href="https://chat.whatsapp.com/GaTNqzuM2HuDqUpEWZdQzA"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg font-semibold transition ease-in-out duration-300 border-2 border-green-500"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 300 }}>
						<FaWhatsapp className="text-lg" />
						Open Group
					</motion.a>

					{/* Next Meetings Button */}
					<motion.a
						href="/events"
						className="bg-white text-red-600 px-6 py-2 text-lg font-semibold hover:bg-red-100 transition ease-in-out duration-300 border-2 border-red-600 flex items-center justify-center"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 300 }}>
						Next Meetings
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
};

export default Header;
