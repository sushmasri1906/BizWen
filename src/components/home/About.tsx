import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
				{/* Image */}
				<div className="w-full md:w-1/2 shrink-0">
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744353073/5_f51qel.jpg"
						alt="About Us"
						width={400}
						height={500}
						className="w-full h-[400px] object-cover rounded-lg shadow-lg"
					/>
				</div>

				{/* Text Content */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0B0C2A] mb-4">
						<span className="text-red-600">W</span>omen <br />
						<span className="text-red-600">E</span>ntrepreneur <br />
						<span className="text-red-600">N</span>etwork
					</h1>
					<p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto md:mx-0">
						A vibrant community dedicated to empowering{" "}
						<span className="text-red-600 font-semibold">
							women entrepreneurs
						</span>{" "}
						through mentorship, collaboration, training, and meaningful
						networking opportunities.
					</p>
					<Link
						href="/about"
						className="inline-block bg-red-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition-all duration-300">
						Read More
					</Link>
				</div>
			</div>
		</section>
	);
}

export default About;
