import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Community = () => {
	return (
		<section className="bg-white text-gray-900 h-[60vh] flex items-center justify-center py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-2xl text-red-600 font-semibold tracking-wider mb-4">
					Connect | Collaborate | Grow
				</h2>
				<p className="text-lg mb-8">
					Join a dynamic network of ambitious professionals, entrepreneurs,
					mentors, innovators, and leaders who are shaping the future. At WEN,
					we empower growth, collaboration, and success.
				</p>
				<Link
					href="#join"
					className="text-red-600 transition duration-300 inline-flex items-center font-medium text-lg hover:underline">
					Join the WEN Community
					<FaArrowRight className="ml-2" />
				</Link>
			</div>
		</section>
	);
};

export default Community;
