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
			className="bg-red-200 text-black pt-16 pb-8 px-6">
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
				<div>
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png"
						alt="WEN Logo"
						width={160}
						height={100}
						className="mb-4 ml-4"
					/>
					<p className="text-sm leading-relaxed text-black">
						A dynamic platform empowering women entrepreneurs through community,
						collaboration, and growth.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-red-600 mb-3">
						Contact Us
					</h3>
					<ul className="text-sm space-y-3 text-black">
						<li className="flex gap-3 items-start">
							<FaMapMarkerAlt className="mt-1 h-7 w-7 text-red-500" />
							<span>
								{" "}
								Flat 102, RR Heights, East Srinivas Nagar Colony, Srinivasa
								Nagar, Ameerpet, Hyderabad, Telangana 500038
							</span>
						</li>

						<li className="flex items-center gap-3">
							<FaPhoneAlt className="text-red-500" />
							+91 91606 66649
						</li>
						<li className="flex items-center gap-3">
							<FaEnvelope className="text-red-500" />
							wennetwork68@gmail.com
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-red-600 mb-3">
						Quick Links
					</h3>
					<ul className="text-sm space-y-3 text-black">
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
					<p className="text-sm text-black mb-4">
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
			<div className="text-center border-t border-gray-700 mt-12 pt-5 text-sm text-black">
				© 2025 Biz-Network®. All rights reserved.
				<br />
				<span>
					Developed by{" "}
					<Link
						href="https://www.hsdev.in/"
						target="_blank"
						className="text-red-600 hover:text-red-700 ">
						hsdev.in
					</Link>
				</span>
			</div>
		</motion.footer>
	);
};

export default Footer;
