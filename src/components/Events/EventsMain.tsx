"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Key } from "react";

type Event = {
	title: string;
	slug: string;
	date: string;
	location: string;
	description?: string;
	image?: string;
	price?: string;
	contact?: string;
	registrationDeadline?: string;
	extraInfo?: string;
};

export default function EventsMain() {
	const upcomingEvents: Event[] = [
		{
			title: "WEN Network Meet",
			slug: "WENNetworkMeet",
			date: "May 1st, 2025,7:30 Am",
			location: "Pincode Hotels, Secunderabad",
			price: "₹499",
			contact: "8121212117",
			registrationDeadline: "April 29",
			extraInfo: "Please bring 50 business cards.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745217322/w1_pvsb1q.jpg",
		},
	];

	const finishedEvents: Event[] = [
		{
			title: "Business Women Awards",
			slug: "BusinessWomenAwards",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"A grand meet-up for WEN heads and active members to plan, discuss, and network.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744887792/wb2_kqjfal.jpg",
		},
		{
			title: "WEN network Launch",
			slug: "WENNetworkLaunch",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"Celebrating the official launch of the WEN network with powerful sessions and networking opportunities.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744887788/wb1_vlwdau.jpg",
		},
		{
			title: "2025 Womens Day Celebrations",
			slug: "WomensDayGallery",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"A vibrant celebration to honor women's achievements, strength, and unity across industries.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744887793/wb3_qhp6jo.jpg",
		},
	];

	const renderEventCard = (
		event: Event,
		index: Key | null | undefined,
		isFinished = false
	) => (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: typeof index === "number" ? index * 0.2 : 0,
			}}
			viewport={{ once: true }}
			className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
			{/* Event Image */}
			<div className="relative w-full h-64 bg-white flex items-center justify-center">
				{event.image ? (
					<Image
						src={event.image}
						alt={event.title}
						fill
						className="object-contain group-hover:scale-105 transition-transform duration-300"
					/>
				) : (
					<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
						No Image Available
					</div>
				)}

				{/* Badge for Upcoming Events */}
				{!isFinished && (
					<span className="absolute top-6 left-4 px-3 py-1 bg-red-600 text-white font-semibold text-xs rounded-full shadow-md">
						Upcoming
					</span>
				)}
			</div>

			{/* Event Content */}
			<div className="p-5 flex flex-col flex-grow">
				<h2 className="text-lg font-bold text-red-600">{event.title}</h2>
				<p className="text-sm text-black mt-1">
					{event.date} | {event.location}
				</p>

				{/* Event Details */}
				{!isFinished ? (
					<ul className="mt-3 text-sm text-black flex-grow space-y-4">
						{/* Meeting Fee */}
						{event.price && (
							<li className="p-4 bg-gray-100 rounded-lg shadow-md">
								<strong className="text-lg text-red-600">Meeting Fee:</strong>
								<p>{event.price}</p>
							</li>
						)}

						{/* Registration Deadline */}
						{event.registrationDeadline && (
							<li className="p-4 bg-gray-100 rounded-lg shadow-md">
								<strong className="text-lg text-red-600">
									Registrations close:
								</strong>
								<p>{event.registrationDeadline}</p>
							</li>
						)}

						{/* Extra Info */}
						{event.extraInfo && (
							<li className="p-4 bg-gray-100 rounded-lg shadow-md">
								<strong className="text-lg text-red-600">Note:</strong>
								<p>{event.extraInfo}</p>
							</li>
						)}

						{/* Contact Section with Phone Number */}
						{event.contact && (
							<li className="p-4 bg-gray-100 rounded-lg shadow-md">
								<strong className="text-lg text-red-600">Contact:</strong>
								<p>
									<a
										href={`tel:${event.contact.split(" ")[1]}`} // Extracting number from "Name at 1234567890"
										className="text-blue-600 hover:text-blue-800 transition-colors">
										{event.contact}
									</a>
								</p>
							</li>
						)}
					</ul>
				) : (
					<p className="mt-3 text-sm text-black flex-grow">
						{event.description || "Stay tuned for more details."}
					</p>
				)}

				{isFinished && (
					<div className="mt-4">
						<Link
							href={`/${event.slug}`}
							className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
							View Gallery <FaArrowRight className="ml-2" />
						</Link>
					</div>
				)}
			</div>
		</motion.div>
	);

	return (
		<section className="relative py-[120px] min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-gray-50 via-white to-red-50 text-black px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Page Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h1 className="text-4xl font-extrabold text-red-600 mb-4">
						WEN Events
					</h1>
					<Link
						href="/"
						className="inline-block mb-4 text-sm text-red-600 hover:text-red-800 font-medium transition-colors">
						← Back to Home
					</Link>
					<p className="text-black mb-10 max-w-3xl">
						Explore impactful events that bring together ambitious women
						entrepreneurs from across the globe.
					</p>
				</motion.div>

				<div className="mb-16">
					<h2 className="text-2xl font-bold text-red-600 mb-6">
						Upcoming Events
					</h2>
					{upcomingEvents.length === 0 ? (
						<p className="text-sm text-black">No upcoming events available.</p>
					) : (
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{upcomingEvents.map((event, index) =>
								renderEventCard(event, index)
							)}
						</div>
					)}
				</div>

				<div>
					<h2 className="text-2xl font-bold text-red-600 mb-6">
						Previous Events
					</h2>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{finishedEvents.map((event, index) =>
							renderEventCard(event, index, true)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
