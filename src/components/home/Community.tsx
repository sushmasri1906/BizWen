import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import Link from "next/link"; // Import Link from next/link

const Community = () => {
	return (
		<section className="bg-white text-gray-900 h-[60vh] flex items-center justify-center py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-4">
					Connect With Like-Minded People in the WEN Community!
				</h2>
				<p className="text-lg mb-8">
					Join a dynamic network of ambitious professionals, entrepreneurs,
					mentors, innovators, and leaders who are shaping the future. At WEN,
					we empower growth, collaboration, and success.
				</p>
				<Link
					href="#join"
					className=" text-red-600 transition duration-300 inline-flex items-center">
					Join the WEN Community
					<FaArrowRight className="ml-2" />
				</Link>
			</div>
		</section>
	);
};

export default Community;
