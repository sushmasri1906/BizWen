"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
		<section className="relative py-[120px] min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-gray-50 via-white to-red-50 text-black px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h1 className="text-4xl font-extrabold text-red-600 mb-4">
						WEN Events
					</h1>
					<p className="text-black mb-10 max-w-3xl">
						Explore impactful events that bring together ambitious women
						entrepreneurs from across the globe. Every event fosters connection,
						learning, and the celebration of success.
					</p>
				</motion.div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{events.map((event, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
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
								<p className="text-sm text-black mt-1">
									{event.date} | {event.location}
								</p>
								<p className="mt-3 text-black text-sm flex-grow">
									{event.description}
								</p>
								<div className="mt-4">
									<Link
										href="/gallery"
										className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
										View Gallery <FaArrowRight className="ml-2" />
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-24 text-center">
					<h2 className="text-2xl font-bold text-red-600 mb-3">WEN Awards</h2>
					<p className="text-black max-w-2xl mx-auto mb-6">
						Honoring trailblazing women entrepreneurs who have redefined success
						and inspired others through excellence, creativity, and impact.
						Explore our award winners and their inspiring journeys.
					</p>
					<Link
						href="/awards"
						className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
						View Awards <FaArrowRight className="ml-2" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
