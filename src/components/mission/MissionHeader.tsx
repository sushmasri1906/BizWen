"use client";

import { motion } from "framer-motion";
import React from "react";
import { PiUsersThreeDuotone, PiStudentDuotone } from "react-icons/pi";
import { HiOutlineHashtag } from "react-icons/hi2";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const MissionHeader = () => {
	const missionItems = [
		{
			icon: <PiUsersThreeDuotone className="text-4xl text-red-600 mb-3" />,
			text: "To empower women entrepreneurs by fostering a strong network of collaboration, education, and growth.",
		},
		{
			icon: <HiOutlineHashtag className="text-4xl text-red-600 mb-3" />,
			text: "To create business opportunities through meaningful connections and strategic partnerships.",
		},
		{
			icon: <PiStudentDuotone className="text-4xl text-red-600 mb-3" />,
			text: "To provide mentorship and resources that drive professional success and financial independence.",
		},
		{
			icon: <MdOutlineEmojiObjects className="text-4xl text-red-600 mb-3" />,
			text: "To encourage leadership and innovation in diverse industries.",
		},
		{
			icon: <FaHandsHelping className="text-4xl text-red-600 mb-3" />,
			text: "To promote social impact initiatives that uplift communities and create sustainable change.",
		},
	];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="min-h-screen bg-gradient-to-br bg-white py-20 px-6 text-gray-800">
			<div className="max-w-5xl mx-auto">
				<motion.h2
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-10">
					Our Mission at WEN
				</motion.h2>

				<motion.p
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="text-lg md:text-xl text-center text-gray-700 font-medium max-w-3xl mx-auto mb-8">
					Women Entrepreneurs Network (WEN) is a dynamic platform dedicated to
					empowering and uplifting women entrepreneurs across diverse
					industries. We foster a collaborative business ecosystem by providing
					opportunities for networking, mentorship, business growth, and
					leadership development.
				</motion.p>

				<div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
					{missionItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
							className="bg-white rounded-xl p-6 shadow-md border  border-red-600">
							{item.icon}
							<p className="text-md font-semibold text-gray-800">{item.text}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 1 }}
					className="mt-16 text-center">
					<h3 className="text-3xl font-bold text-red-600 mb-4">Our Vision</h3>
					<p className="text-lg max-w-3xl mx-auto text-gray-800 font-medium">
						We envision a world where every woman entrepreneur has the
						resources, support, and confidence to build and scale a successful
						business. By fostering a spirit of collaboration over competition,
						WEN aims to be the leading network for women in business.
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default MissionHeader;
