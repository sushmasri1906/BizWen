"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type GalleryProps = {
	title: string;
	description?: string;
	images: string[];
};

const EventGallery = ({ title, description, images }: GalleryProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const router = useRouter();

	const handleClose = () => setSelectedIndex(null);
	const handlePrev = () =>
		setSelectedIndex((prev) =>
			prev !== null ? (prev - 1 + images.length) % images.length : null
		);
	const handleNext = () =>
		setSelectedIndex((prev) =>
			prev !== null ? (prev + 1) % images.length : null
		);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		const touchEnd = e.changedTouches[0].clientX;
		if (touchStart !== null) {
			if (touchEnd - touchStart > 50) handlePrev();
			else if (touchEnd - touchStart < -50) handleNext();
		}
	};

	return (
		<section className="min-h-screen bg-gray-100 py-20 text-black relative">
			<div className="max-w-7xl mx-auto">
				<button
					onClick={() => router.back()}
					className="my-6 flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
					<FiChevronLeft /> Go Back
				</button>

				<h1 className="text-4xl font-bold text-center text-red-600 mb-4">
					{title}
				</h1>

				{description && (
					<p className="text-center text-black mb-10 max-w-2xl mx-auto">
						{description}
					</p>
				)}

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{images.map((url, index) => (
						<div
							key={index}
							onClick={() => setSelectedIndex(index)}
							className="cursor-pointer overflow-hidden shadow-md transition-transform hover:scale-105 duration-200">
							<Image
								src={url.replace("/upload/", "/upload/f_auto,q_auto/")}
								alt={`Image ${index + 1}`}
								width={500}
								height={350}
								className="object-cover w-full h-auto"
								placeholder="blur"
								blurDataURL="/placeholder.jpg"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Fullscreen Image Modal */}
			{selectedIndex !== null && (
				<div
					className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50"
					onClick={handleClose}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}>
					{/* Modal Close Button */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							handleClose();
						}}
						className="absolute top-6 left-6 flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition shadow-lg z-50">
						<FiChevronLeft /> Close
					</button>

					<div
						onClick={(e) => e.stopPropagation()}
						className="relative w-full h-full flex items-center justify-center">
						{/* Prev Arrow */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								handlePrev();
							}}
							className="absolute left-4 text-white text-3xl hover:text-red-500 transition z-50 bg-black/50 rounded-full p-2 shadow-lg">
							<FiChevronLeft />
						</button>

						{/* Full Image */}
						<Image
							src={images[selectedIndex]}
							alt={`Selected Image ${selectedIndex + 1}`}
							fill
							className="object-contain max-h-screen w-full h-full"
							style={{ pointerEvents: "none" }}
						/>

						{/* Next Arrow */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								handleNext();
							}}
							className="absolute right-4 text-white text-3xl hover:text-red-500 transition z-50 bg-black/50 rounded-full p-2 shadow-lg">
							<FiChevronRight />
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default EventGallery;
