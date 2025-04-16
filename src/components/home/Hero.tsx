"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="bg-gradient-to-br from-gray-50 via-white to-red-50 py-20">
			<div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 leading-tight">
							Empowering <br className="hidden md:block" />
							Women Entrepreneurs
						</h1>
						<p className="text-gray-700 text-lg md:text-xl mb-8">
							Join the Women Entrepreneurship Network to connect, collaborate,
							and grow your ideas into lasting impact. We&apos;re here to
							support women-led innovation, leadership, and success.
						</p>
						<div className="flex flex-col sm:flex-row justify-center md:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
							<Link
								href="/mission"
								className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-red-700 transition duration-300">
								Our Mission
							</Link>
							<Link
								href="/events"
								className="border border-red-600 text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300">
								Upcoming Events
							</Link>
						</div>
					</div>

					<div className="w-full md:w-1/2 flex justify-center">
						<div className="relative w-[90%] max-w-md  overflow-hidden shadow-xl">
							<Image
								src="https://res.cloudinary.com/dotuv0p3r/image/upload/v1744368402/7_yzhrsk.jpg"
								alt="WEN Hero"
								width={600}
								height={600}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-red-600 via-transparent to-transparent opacity-10" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
