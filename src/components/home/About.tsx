"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageUrls = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744350278/1_xowuqc.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744352459/4_z0s52v.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744350278/1_xowuqc.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744353073/5_f51qel.jpg",
];

const About = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	};

	return (
		<section className="bg-white dark:bg-black py-20 px-6 md:px-10 transition-colors duration-300">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
				{/* Image Slider Section */}
				<div className="w-full md:w-1/2">
					<Slider {...sliderSettings}>
						{imageUrls.map((url, index) => (
							<div key={index} className="w-full">
								<div className="relative w-full h-auto">
									<Image
										src={url}
										alt={`About WEN ${index + 1}`}
										width={700}
										height={500}
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>

				{/* Text Section */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0C2A] dark:text-white leading-tight mb-6">
						<span className="text-red-600">W</span>omen <br />
						<span className="text-red-600">E</span>ntrepreneur <br />
						<span className="text-red-600">N</span>etwork
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
						WEN is a dynamic platform designed to empower entrepreneurs,
						freelancers, startups, and digital professionals by providing a{" "}
						<span className="font-semibold text-red-600">
							zero-budget networking ecosystem
						</span>
						.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
						Our mission is to foster meaningful connections, drive business
						collaborations, and create exponential growth—together.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
						At WEN, we believe that when individuals connect with purpose and
						share referrals with trust, great businesses are built.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
