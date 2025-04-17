"use client";

import React from "react";
import EventGallery from "@/components/Events/EventGallery";

const BusinessWomenAwards = () => {
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

	return (
		<EventGallery title="Business Women Awards 2025" images={awardImages} />
	);
};

export default BusinessWomenAwards;
