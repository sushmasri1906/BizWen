"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Local images
import img1 from "../../../public/assets/1.jpg";
import img2 from "../../../public/assets/2.jpg";
import img3 from "../../../public/assets/3.jpg";
import img4 from "../../../public/assets/4.jpg";

const images = [img1, img2, img3, img4];

const Header = () => {
	const [isLargeScreen, setIsLargeScreen] = useState(true);

	useEffect(() => {
		const checkSize = () => {
			setIsLargeScreen(window.innerWidth >= 768); // Tailwind's md
		};

		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);

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
		<section className="relative pt-[80px] w-full overflow-hidden text-white">
			<Slider {...settings} className="h-full w-full">
				{images.map((img, index) => (
					<div
						key={index}
						className="relative flex justify-center items-center w-full h-auto md:h-[calc(100vh-80px)]">
						{/* Image Handling */}
						{isLargeScreen ? (
							<>
								{/* Fullscreen Image with Fill */}
								<Image
									src={img}
									alt={`slide-${index}`}
									fill
									priority
									quality={100}
									className="object-cover"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
							</>
						) : (
							<Image
								src={img}
								alt={`slide-${index}`}
								width={1300}
								height={680}
								quality={100}
								className=" object-cover w-full h-auto"
							/>
						)}
					</div>
				))}
			</Slider>

			{/* Dots Styling */}
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
