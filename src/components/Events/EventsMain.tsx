"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaShareAlt } from "react-icons/fa";
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
	paymentLink?: string;
};

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	if (isNaN(date.getTime())) return "Invalid Date";

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return date.toLocaleDateString("en-US", options);
};

const calculateRemainingTime = (deadline: string) => {
	const deadlineDate = new Date(deadline);
	if (isNaN(deadlineDate.getTime())) return "Invalid Date";

	const now = new Date().getTime();
	const timeDifference = deadlineDate.getTime() - now;

	if (timeDifference <= 0) {
		return "Registration Closed";
	}

	const days = Math.floor(timeDifference / (1000 * 3600 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
	);
	const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default function EventsMain() {
	const upcomingEvents: Event[] = [
		{
			title: "WEN, Hyderabad Chapter Meet",
			slug: "WENNetworkMeet",
			date: "May 1st, 2025, 7:30 AM",
			location: "Pincode Hotels, Secunderabad",
			price: "₹499",
			contact: "8121212117",
			registrationDeadline: "2025-04-29T23:59:59", // ISO format
			extraInfo: "Please bring 50 business cards.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745225791/w1_je1uvv.jpg",
			paymentLink: "https://payments.cashfree.com/forms/WenMay",
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
			title: "WEN Network Launch",
			slug: "WENNetworkLaunch",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"Celebrating the official launch of the WEN network with powerful sessions and networking opportunities.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744887788/wb1_vlwdau.jpg",
		},
		{
			title: "2025 Women's Day Celebrations",
			slug: "WomensDayGallery",
			date: "March 8th, 2025",
			location: "Hyderabad, India",
			description:
				"A vibrant celebration to honor women's achievements, strength, and unity across industries.",
			image:
				"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744887793/wb3_qhp6jo.jpg",
		},
	];

	const [remainingTime, setRemainingTime] = useState<string | null>(null);

	useEffect(() => {
		// Function to update the remaining time
		const updateRemainingTime = () => {
			const event = upcomingEvents[0]; // Assuming we're showing only the first event for now
			if (event.registrationDeadline) {
				const timeLeft = calculateRemainingTime(event.registrationDeadline);
				setRemainingTime(timeLeft);
			}
		};

		// Update every second (1000ms)
		const timerId = setInterval(updateRemainingTime, 1000);

		// Run initial calculation immediately
		updateRemainingTime();

		// Cleanup timer on unmount
		return () => clearInterval(timerId);
	}, [upcomingEvents]);

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
					<span className="absolute top-10 left-4 px-3 py-1 bg-red-600 text-white font-semibold text-xs rounded-full shadow-md">
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

				{/* Countdown Timer and Last Registration Date */}
				{!isFinished && event.registrationDeadline && (
					<div className="mt-3 text-sm text-black font-semibold">
						<div>
							Registration Deadline:{" "}
							<span className="text-red-600">
								{formatDate(event.registrationDeadline)}
							</span>
						</div>
						<div>
							Time Left:{" "}
							<span className="text-red-600">
								{remainingTime ?? "Loading..."}
							</span>
						</div>
					</div>
				)}

				{/* Event Details */}
				{isFinished ? (
					<p className="mt-3 text-sm text-black flex-grow">
						{event.description || "Stay tuned for more details."}
					</p>
				) : (
					<>
						{/* Event Price, Extra Info, and Contact */}
						<ul className="mt-3 text-sm text-black flex-grow space-y-4">
							{event.price && (
								<li className="p-4 bg-gray-100 rounded-lg shadow-md">
									<strong className="text-sm text-gray-800 font-semibold">
										Meeting Fee:
									</strong>
									<p>{event.price}</p>
								</li>
							)}

							{event.extraInfo && (
								<li className="p-4 bg-gray-100 rounded-lg shadow-md">
									<strong className="text-sm text-gray-800 font-semibold">
										Note:
									</strong>
									<p>{event.extraInfo}</p>
								</li>
							)}

							{event.contact && (
								<li className="p-4 bg-gray-100 rounded-lg shadow-md">
									<strong className="text-sm text-gray-800 font-semibold">
										Contact:
									</strong>
									<p className="mt-1 text-sm text-gray-800">
										<span className="font-medium">Aparna Kokala</span>{" "}
										<span className="text-gray-600">for LED presentations</span>{" "}
										<a
											href={`tel:${event.contact}`}
											className="text-blue-600 hover:text-blue-800 transition-colors">
											{event.contact}
										</a>
									</p>
								</li>
							)}
						</ul>

						{/* Payment Button */}
						{event.paymentLink && (
							<div className="mt-4">
								<a
									href={event.paymentLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
									Book Your Slot Online
								</a>
							</div>
						)}
					</>
				)}

				{/* Gallery Link for Finished Events */}
				{isFinished && (
					<div className="mt-4">
						<Link
							href={`/${event.slug}`}
							className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
							View Gallery <FaArrowRight className="ml-2" />
						</Link>
					</div>
				)}

				{/* WhatsApp Share Link */}
				<div className="mt-4">
					<a
						href={`https://wa.me/?text=${encodeURIComponent(
							`Check out the event details: https://www.bizwen.site/events`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-sm text-green-600 hover:text-green-800 font-medium transition-colors">
						<FaShareAlt className="mr-1" /> Share on WhatsApp
					</a>
				</div>
			</div>
		</motion.div>
	);

	return (
		<section className="relative py-[120px] min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-gray-50 via-white to-red-50 text-black px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Top Section with Title and Back Button */}
				<div className=" mb-12">
					<h1 className="text-4xl font-extrabold text-red-600 mb-4">
						WEN Events
					</h1>
					<Link href="/" className="text-red-600 text-sm  ">
						← Back to Home
					</Link>
					<h3 className="text-md sm:text-lg  leading-tight text-black mt-4">
						Explore impactful events that bring together ambitious women
						entrepreneurs from across the globe.
					</h3>
				</div>

				{/* Upcoming Events */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className=" space-y-6">
					<h2 className="text-3xl sm:text-4xl font-bold leading-tight text-red-600">
						Upcoming Events
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
					{upcomingEvents.map((event, index) => renderEventCard(event, index))}
				</div>

				{/* Past Events */}
				<div className="mt-16">
					<h3 className="text-3xl sm:text-4xl font-bold leading-tight text-red-600">
						Previous Events
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						{finishedEvents.map((event, index) =>
							renderEventCard(event, index, true)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
