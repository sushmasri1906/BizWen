"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WomenDayGalleryImages = [
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744368402/7_yzhrsk.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372425/1_lgxipp.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744370087/8_cfpxot.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372462/7_gvqotf.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372458/10_pzehcr.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372438/2_i1nyjh.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372464/9_emgion.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372464/5_faqs49.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372468/4_vank7j.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372467/3_bkwi0f.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744372467/6_oknf5j.jpg",
];

const WomensDayGallery = () => {
	return (
		<section className="min-h-screen px-4 py-20 mt-10 bg-white  text-black ">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold mb-12 text-center text-red-600">
					Women&apos;s Day Event Gallery 2025
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{WomenDayGalleryImages.map((url, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.05 }}
							className="relative w-full aspect-[4/3] overflow-hidden shadow-md group">
							<Image
								src={url.replace("/upload/", "/upload/f_auto,q_auto/")}
								alt={`WEN Gallery ${index + 1}`}
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-300"
								placeholder="blur"
								blurDataURL="/placeholder.jpg"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WomensDayGallery;
