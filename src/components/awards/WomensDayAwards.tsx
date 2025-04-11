"use client";

import React from "react";
import Image from "next/image";

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
				<h1 className="text-4xl font-bold mb-10 text-center">
					Women&apos;s Day Awards 2025
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{awardImages.map((url, index) => (
						<div
							key={index}
							className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg p-4 flex flex-col items-center">
							<Image
								src={url}
								alt={`Award ${index + 1}`}
								width={500}
								height={350}
								className="rounded-md object-contain w-full h-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WomensDayAwards;
