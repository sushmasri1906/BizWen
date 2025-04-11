"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
				<div className="flex flex-col md:flex-row items-center gap-16">
					{/* Text Section */}
					<div className="w-full md:w-1/2">
						<h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
							Empowering Women Entrepreneurs
						</h1>
						<p className="text-gray-700 text-lg mb-8">
							Join the Women Entrepreneurship Network to connect, collaborate,
							and grow your ideas into impact. We support women-led innovation
							and leadership through mentorship, events, and community.
						</p>
						<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
							<Link
								href="/mission"
								className="bg-red-600 text-white px-6 py-3 rounded-md text-center hover:bg-red-700 transition">
								Our Mission
							</Link>
							<Link
								href="/events"
								className="border border-red-600 text-red-600 px-6 py-3 rounded-md text-center hover:bg-red-600 hover:text-white transition">
								Upcoming Events
							</Link>
						</div>
					</div>

					{/* Image Section */}
					<div className="w-full md:w-1/2 flex justify-center">
						<Image
							src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744353517/6_sb20hg.jpg"
							alt="WEN Hero"
							width={600}
							height={600}
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
