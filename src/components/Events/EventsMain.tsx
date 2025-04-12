"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function EventsMain() {
	const events = [
		{
			title: "WEN Leadership Summit 2025",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"A grand meet-up for WEN heads and active members to plan, discuss, and network.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744361057/5_jmxi21.png",
		},
	];

	return (
		<section className="relative py-[120px] min-h-[calc(100vh-80px)] w-full bg-gray-50 text-black px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-red-600 mb-4">WEN Events</h1>
				<p className="text-gray-700 mb-10">
					Stay updated with upcoming and past events organized by Women
					Entrepreneurs Network (WEN). Every event brings inspiration,
					connection, and empowerment.
				</p>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
							<div className="relative w-full h-56">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-5 flex flex-col flex-grow">
								<h2 className="text-xl font-bold text-red-600">
									{event.title}
								</h2>
								<p className="text-sm text-gray-500 mt-1">
									{event.date} | {event.location}
								</p>
								<p className="mt-3 text-gray-700 text-sm flex-grow">
									{event.description}
								</p>
								<div className="mt-4">
									<Link
										href="/gallery"
										className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
										View More <FaArrowRight className="ml-2" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Awards Section */}
				<div className="mt-20 text-center">
					<h2 className="text-2xl font-semibold text-red-600 mb-3">
						WEN Awards
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto mb-6">
						Recognizing the outstanding achievements of women entrepreneurs. WEN
						Awards celebrate leadership, innovation, and community impact. Check
						out our award winners and memorable moments.
					</p>
					<Link
						href="/awards"
						className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
						View Awards <FaArrowRight className="ml-2" />
					</Link>
				</div>
			</div>
		</section>
	);
}
