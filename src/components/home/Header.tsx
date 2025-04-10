"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<section>
			<div
				className="relative  h-[96vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-no-repeat "
				style={{
					backgroundImage: "url('')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				<div className="relative z-10 max-w-3xl px-6 bg-black/40 backdrop-blur-xl p-10 shadow-2xl rounded-xl">
					<h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
						Welcome to <span className="text-red-600">WEN</span>
					</h1>

					<p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
						Connecting communities through unforgettable web events. Discover,
						organize, and attend online experiences with ease.
					</p>

					<div className="mt-6 flex justify-center space-x-4">
						<Link href="/events">
							<button className="bg-red-600 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-md">
								Explore Events
							</button>
						</Link>
						<Link href="/about">
							<button className="border border-red-600 px-6 py-3 rounded-lg text-lg font-semibold text-red-600 hover:bg-red-600 hover:text-black transition-all shadow-md">
								About Us
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
