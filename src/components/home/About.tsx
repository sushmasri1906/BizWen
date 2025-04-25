"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageUrls = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744350278/1_xowuqc.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744352459/4_z0s52v.jpg",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877292/14_vvamgj.png",
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
		autoplaySpeed: 2000,
		fade: true,
	};

	return (
		<section className="bg-white py-20 px-6 md:px-10">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
				<div className="w-full md:w-1/2">
					<Slider {...sliderSettings}>
						{imageUrls.map((url, index) => (
							<div key={index} className="w-full">
								<div className="relative w-full h-auto">
									<motion.div
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden ">
										<Image
											src={url}
											alt={`About WEN ${index + 1}`}
											width={700}
											height={500}
											className="w-full h-auto object-cover transform transition-all duration-300 ease-in-out"
										/>
									</motion.div>
								</div>
							</div>
						))}
					</Slider>
				</div>

				<div className="w-full md:w-1/2 text-center md:text-left">
					<motion.h2
						className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<span className="text-red-600">W</span>omen <br />
						<span className="text-red-600">E</span>ntrepreneur <br />
						<span className="text-red-600">N</span>etwork
					</motion.h2>
					<motion.p
						className="text-lg text-black mb-4 max-w-xl mx-auto md:mx-0"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}>
						WEN is a dynamic platform designed to empower entrepreneurs,
						freelancers, startups, and digital professionals by providing a{" "}
						<span className="font-semibold text-red-600">
							zero-budget networking ecosystem
						</span>
						.
					</motion.p>
					<motion.p
						className="text-lg text-black mb-4 max-w-xl mx-auto md:mx-0"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.7 }}>
						Our mission is to foster meaningful connections, drive business
						collaborations, and create exponential growth together.
					</motion.p>
					<motion.p
						className="text-lg text-black max-w-xl mx-auto md:mx-0"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.9 }}>
						At WEN, we believe that when individuals connect with purpose and
						share referrals with trust, great businesses are built.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default About;
