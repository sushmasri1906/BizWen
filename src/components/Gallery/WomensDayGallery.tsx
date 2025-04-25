"use client";

import EventGallery from "@/components/Events/EventGallery";

const womensDayImages = [
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487407/4_crfcce.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487407/5_rk4qsh.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487406/3_hrg7n1.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487406/2_vllbbj.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487406/1_s3zbks.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487400/6_wnl4ue.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487400/10_nlfout.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487400/9_u15kso.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487400/8_qrvki9.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1745487400/7_wd6fnx.png",
];

export default function WomensDayGallery() {
	return (
		<EventGallery
			title="Women's Day Event Gallery 2025"
			description="Highlights from the Women's Day celebration featuring empowering moments and joyful memories."
			images={womensDayImages}
		/>
	);
}
