import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<section className="bg-white dark:bg-black py-20 px-6 md:px-10 transition-colors duration-300">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
				{/* Image Section */}
				<div className="w-full md:w-1/2">
					<div className="relative overflow-hidden shadow-lg group">
						<Image
							src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744353073/5_f51qel.jpg"
							alt="About WEN"
							width={500}
							height={700}
							className="object-cover w-full h-[400px] transform group-hover:scale-105 transition duration-500 ease-in-out"
						/>
					</div>
				</div>

				{/* Text Content */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					{/* Main Heading */}
					<h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0C2A] dark:text-white leading-tight mb-6">
						<span className="text-red-600">W</span>omen <br />
						<span className="text-red-600">E</span>ntrepreneur <br />
						<span className="text-red-600">N</span>etwork
					</h2>

					{/* Description */}
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
						WEN is a dynamic platform designed to empower entrepreneurs,
						freelancers, startups, and digital professionals by providing a{" "}
						<span className="font-semibold text-red-600">
							zero-budget networking ecosystem
						</span>
						.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
						Our mission is to foster meaningful connections, drive business
						collaborations, and create exponential growth—together.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
						At WEN, we believe that when individuals connect with purpose and
						share referrals with trust, great businesses are built.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
