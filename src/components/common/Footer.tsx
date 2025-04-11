"use client";

import React from "react";
import Link from "next/link";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="bg-gray-900 text-gray-100 pt-16 pb-8 px-6">
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
				<div>
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744194981/WEN_Logo_1_s99dua.png"
						alt="WEN Logo"
						width={100}
						height={80}
						className="mb-4 rounded-b-full ml-4"
					/>
					<p className="text-sm leading-relaxed text-gray-300">
						A dynamic platform empowering women entrepreneurs through community,
						collaboration, and growth.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-red-600 mb-3">
						Contact Us
					</h3>
					<ul className="text-sm space-y-3 text-gray-300">
						<li className="flex gap-3 items-start">
							<FaMapMarkerAlt className="mt-1 text-red-500" />
							<span>adress</span>
						</li>
						<li className="flex gap-3 items-start">
							<FaMapMarkerAlt className="mt-1 text-red-500" />
							<span>adress</span>
						</li>
						<li className="flex items-center gap-3">
							<FaPhoneAlt className="text-red-500" />
							+91 99999 88888
						</li>
						<li className="flex items-center gap-3">
							<FaEnvelope className="text-red-500" />
							email
						</li>
						<li className="flex items-center gap-3">
							<FaEnvelope className="text-red-500" />
							email
						</li>
						<li className="font-medium text-gray-400">GST No: </li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-red-600 mb-3">
						Quick Links
					</h3>
					<ul className="text-sm space-y-3 text-gray-300">
						{[
							["Home", "/"],
							["Events", "/events"],
							["Mission", "/mission"],
						].map(([label, link]) => (
							<li key={label}>
								<Link
									href={link}
									className="hover:text-red-400 transition-colors duration-200">
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-red-600 mb-3">
						Join Our Community
					</h3>
					<p className="text-sm text-gray-300 mb-4">
						Be a part of our vibrant WhatsApp group and stay updated on events,
						workshops, and resources curated for women entrepreneurs.
					</p>
					<Link
						href="https://chat.whatsapp.com/LTnBs4Y2Ge4Hsh0Pt6UitJ"
						target="_blank"
						className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
						<FaWhatsapp /> Join WhatsApp Group
					</Link>
				</div>
			</div>

			<div className="text-center border-t border-gray-700 mt-12 pt-5 text-sm text-gray-400">
				© 2025 WEN Network. All rights reserved.
			</div>
		</motion.footer>
	);
};

export default Footer;
