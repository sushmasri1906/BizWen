"use client";

import EventGallery from "@/components/Events/EventGallery";

const wenNetworkImages = [
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877283/11_i6xlew.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877286/12_khnk0s.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877288/13_wjr31q.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877290/15_iquleo.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877292/14_vvamgj.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877298/16_wxks1m.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877305/19_ozig3w.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877308/21_hfhxah.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877310/22_t3wrl2.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877317/24_nwacsv.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877315/25_ylzrse.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877313/23_h7vfba.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877321/26_ymwpqg.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744877323/30_lvaq67.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744361041/3_ahkixk.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744361034/2_vzi49a.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744361049/4_thgm8l.png",
	"https://res.cloudinary.com/dotuv0p3r/image/upload/v1744361028/1_u2r8vk.png",
];

export default function WENNetworkLaunch() {
	return (
		<EventGallery
			title="WEN Network Launch Gallery"
			description="Highlights from our official launch filled with empowering moments, collaboration, and celebration."
			images={wenNetworkImages}
		/>
	);
}
