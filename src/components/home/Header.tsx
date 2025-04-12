"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { FaWhatsapp } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Local images
import img1 from "../../../public/assets/1.jpg";
import img2 from "../../../public/assets/2.jpg";
import img3 from "../../../public/assets/3.jpg";
import img4 from "../../../public/assets/4.jpg";
// import img5 from "../../../public/assets/5.jpg";
// import img6 from "../../../public/assets/6.jpg";
// import img7 from "../../../public/assets/7.jpg";

const images = [img1, img2, img3, img4];

const Header = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		pauseOnHover: false,
		appendDots: (dots: React.ReactNode) => (
			<div className="flex justify-center mt-4">
				<ul className="flex gap-2">{dots}</ul>
			</div>
		),
		dotsClass: "slick-dots custom-dots",
	};

	return (
		<section className="relative pt-[80px] h-[calc(100vh-80px)] w-full overflow-hidden text-white">
			<Slider {...settings} className="h-full w-full">
				{images.map((img, index) => (
					<div key={index} className="relative w-full h-[calc(100vh-80px)]">
						<Image
							src={img}
							alt={`slide-${index}`}
							fill
							className="object-cover object-center"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

						<div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-28 px-6">
							<h1 className="text-4xl md:text-5xl font-extrabold mb-4">
								Connect | Collaborate | Grow
							</h1>

							<div className="mt-6 flex flex-wrap justify-center gap-4">
								<Link
									href="https://chat.whatsapp.com/LTnBs4Y2Ge4Hsh0Pt6UitJ"
									target="_blank"
									className="inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full text-lg font-semibold transition-all shadow min-w-[200px] text-center">
									<FaWhatsapp className="text-xl" />
									<span>Join WhatsApp</span>
								</Link>
								<Link href="/events">
									<button className="inline-flex justify-center items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all shadow min-w-[200px] text-center">
										Upcoming Events
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</Slider>

			<style jsx global>{`
				.custom-dots li button:before {
					color: white;
					font-size: 12px;
					opacity: 0.5;
				}
				.custom-dots li.slick-active button:before {
					opacity: 1;
					color: #ef4444;
				}
			`}</style>
		</section>
	);
};

export default Header;
