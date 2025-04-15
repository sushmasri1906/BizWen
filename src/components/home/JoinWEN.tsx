// components/JoinWEN.tsx
import Image from "next/image";
import Link from "next/link";

export default function JoinWEN() {
	return (
		<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Left Content */}
				<div className="flex-1">
					<h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 leading-tight">
						Ready to Grow with WEN?
					</h2>
					<p className="text-xl italic text-gray-600 mb-4">
						“Take the first step toward collaborative success.”
					</p>
					<p className="text-base text-gray-700 mb-6 leading-relaxed">
						At WEN, we believe in the power of connection. Whether you&apos;re
						an entrepreneur, business owner, or creative professional,
						there&apos;s a community waiting to support you. Be part of
						something bigger.
					</p>

					<ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-1">
						<li>Introduce and promote your business to a wide network</li>
						<li>Gain and share referrals within the community</li>
						<li>Get featured through impactful presentations</li>
						<li>Collaborate with like-minded professionals</li>
					</ul>

					<Link
						href="https://your-link-here.com"
						target="_blank"
						className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg transition duration-300">
						Join the Network
					</Link>
				</div>

				{/* Right Visual */}
				<div className="flex-1 flex justify-center items-center p-4">
					<div className=" overflow-hidden shadow-lg max-w-md w-full">
						<Image
							src="https://res.cloudinary.com/dotuv0p3r/image/upload/v1744370087/8_cfpxot.jpg"
							alt="WEN Event"
							width={600}
							height={400}
							className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
