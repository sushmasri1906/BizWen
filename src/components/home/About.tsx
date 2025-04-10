import React from "react";
import Link from "next/link";
import Image from "next/image";
function About() {
	return (
		<>
			<div className="bg-gray-100 py-16">
				<div className="flex flex-col md:flex-row  items-center justify-between max-w-6xl mx-auto px-4 py-10 gap-8">
					<div>
						<Image
							src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744194981/WEN_Logo_1_s99dua.png"
							alt="About Us"
							width={500}
							height={500}
							className="w-full h-[400px] object-cover rounded-lg"
						/>
					</div>
					<div className="text-center md:text-left">
						<p className="text-red-600 text-xl font-semibold mb-2">
							Welcome to WEN
						</p>
						<h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0B0C2A] mb-4">
							<span className="text-red-600">W</span>omen <br />
							<span className="text-red-600">E</span>ntrepreneur <br />
							<span className="text-red-600">N</span>etwork
						</h1>
						<p className="text-gray-600 text-lg max-w-xl mb-6">
							A vibrant community dedicated to empowering{" "}
							<span className="text-red-600 font-semibold">
								women entrepreneurs
							</span>{" "}
							through <br />
							mentorship, collaboration, training, and meaningful networking
							opportunities.
						</p>
						<Link
							href="/about"
							className="inline-block bg-red-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition-all duration-300">
							Read More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
