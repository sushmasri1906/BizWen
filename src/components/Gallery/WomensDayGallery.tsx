"use client";

import EventGallery from "@/components/Events/EventGallery";

const womensDayImages = [
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

export default function WomensDayGallery() {
	return (
		<EventGallery
			title="Women's Day Event Gallery 2025"
			description="Highlights from the Women's Day celebration featuring empowering moments and joyful memories."
			images={womensDayImages}
		/>
	);
}
