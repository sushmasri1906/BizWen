"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 py-24">
			<div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 leading-tight">
							Empowering Women Entrepreneurs
						</h1>
						<p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
							Join the Women Entrepreneurship Network to connect, collaborate,
							and grow your ideas into lasting impact. We&apos;re here to
							support women-led innovation, leadership, and success.
						</p>
						<div className="flex flex-col sm:flex-row justify-center md:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
							<Link
								href="/mission"
								className="bg-red-600 text-white px-4 py-2 text-md font-semibold shadow-lg hover:bg-red-700 transition duration-300">
								Our Mission
							</Link>
							<Link
								href="/events"
								className="border border-red-600 text-red-600 px-4 py-2 text-md font-semibold hover:bg-red-600 hover:text-white transition duration-300">
								Upcoming Events
							</Link>
						</div>
					</div>

					<div className="w-full md:w-1/2 flex justify-center">
						<div className="relative w-[90%] max-w-lg overflow-hidden">
							<Image
								src="https://res.cloudinary.com/dotuv0p3r/image/upload/v1744368402/7_yzhrsk.jpg"
								alt="WEN Hero"
								width={600}
								height={600}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-red-600 via-transparent to-transparent opacity-20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
