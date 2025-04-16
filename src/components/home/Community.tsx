import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Community = () => {
	return (
		<section className="relative bg-gradient-to-br from-white via-gray-50 to-red-50 text-black py-10 px-6 md:px-12 lg:px-24">
			<div className="max-w-5xl mx-auto text-center z-10 relative">
				<div className="mb-2">
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744801279/Untitled_Your_Story_epzbc9.png"
						alt="WEN Logo"
						width={250}
						height={250}
						className="mx-auto object-contain"
					/>
				</div>

				<h2 className="text-3xl md:text-4xl font-extrabold text-red-600 tracking-tight mb-4">
					Connect. Collaborate. Grow.
				</h2>
				<p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8">
					Join a vibrant network of ambitious professionals, entrepreneurs,
					mentors, innovators, and leaders who are shaping the future. At WEN,
					we believe in the power of community to drive success and create
					impact.
				</p>
				<Link
					href="#join"
					className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-red-700 transition duration-300">
					Join the WEN Community <FaArrowRight className="ml-3" />
				</Link>
			</div>

			{/* Decorative blurs */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-40 h-40 bg-red-100 rounded-full opacity-30 blur-3xl" />
				<div className="absolute bottom-10 right-10 w-40 h-40 bg-red-100 rounded-full opacity-20 blur-2xl" />
			</div>
		</section>
	);
};

export default Community;
