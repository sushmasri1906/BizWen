"use client";

import EventGallery from "@/components/Events/EventGallery";

const womensDayImages = [
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877265/3_stdv9d.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877261/2_galile.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877269/4_nwu4e5.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877273/8_zngac7.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877275/6_qhdilb.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877279/9_m5yn9m.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877277/7_puihex.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877281/10_zfzm0k.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877298/16_wxks1m.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877305/19_ozig3w.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877313/23_h7vfba.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877310/22_t3wrl2.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877317/24_nwacsv.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877315/25_ylzrse.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877321/26_ymwpqg.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877319/27_ryfeny.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877325/28_hh0k5o.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877323/30_lvaq67.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877323/30_lvaq67.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877328/29_odhuwz.png",
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
