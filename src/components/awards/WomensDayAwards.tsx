"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awardImages = [
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365861/18_abypji.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365860/17_rli0yw.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365858/19_y7nmsd.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365856/15_lhifil.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365854/14_ws0s57.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365853/16_mhksfm.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365850/12_wtulb9.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365848/13_e95rc9.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365845/11_xbkzzy.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365842/10_zinkrf.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365841/8_vvjkrx.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744365839/9_by0o6y.jpg",
];

const WomensDayAwards = () => {
	return (
		<section className="min-h-screen px-4 py-30 bg-white dark:bg-black text-black dark:text-white">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold mb-10 text-center text-red-600">
					Women&apos;s Day Awards 2025
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{awardImages.map((url, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.05 }}
							className="bg-white dark:bg-neutral-900 overflow-hidden shadow-lg p-4 flex flex-col items-center">
							<Image
								src={url.replace("/upload/", "/upload/f_auto,q_auto/")}
								alt={`Award ${index + 1}`}
								width={500}
								height={350}
								className="object-contain w-full h-auto"
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

export default WomensDayAwards;
