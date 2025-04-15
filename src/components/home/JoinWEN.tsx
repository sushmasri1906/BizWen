// components/JoinWEN.tsx
import Image from "next/image";
import Link from "next/link";

export default function JoinWEN() {
	return (
		<section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
			<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Left Content */}
				<div className="flex-1">
					<h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
						Ready to Grow with WEN?
					</h2>
					<p className="text-lg italic text-gray-600 mb-4">
						“Take the first step toward collaborative success.”
					</p>
					<p className="text-base text-gray-700 mb-6">
						We&apos;re always looking for passionate professionals who believe
						in the power of networking and mutual support. Whether you&apos;re a
						solopreneur, business owner, or service provider, WEN has a place
						for you.
					</p>

					<ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
						<li>Introduce your business to others</li>
						<li>Share and receive referrals</li>
						<li>Participate in feature presentations</li>
						<li>Build a strong support network</li>
					</ul>

					<Link
						href="https://your-link-here.com"
						target="_blank"
						className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow transition duration-300">
						Join Now
					</Link>
				</div>

				{/* Right Visual - Normal Styling */}
				<div className="flex-1 flex justify-center items-center p-6">
					<Image
						src="https://res.cloudinary.com/dotuv0p3r/image/upload/v1744370087/8_cfpxot.jpg"
						alt="WEN Event"
						width={500}
						height={400}
						className=" object-cover w-full h-auto"
					/>
				</div>
			</div>
		</section>
	);
}
