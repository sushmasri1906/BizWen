"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhyJoinWEN() {
	return (
		<section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
						Why Join <span className="text-black">WEN?</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
						🌟 Whether you&apos;re just starting out or scaling up, WEN empowers
						women entrepreneurs with meaningful connections, hands-on support,
						and unmatched visibility — all in a thriving and inclusive
						community.
					</p>
				</div>

				<div className="grid gap-12 md:grid-cols-2">
					{/* Core Benefits */}
					<div className="bg-white p-8 rounded-3xl shadow-lg border border-red-200 hover:shadow-xl transition duration-300">
						<h3 className="text-2xl font-bold text-red-600 mb-6">
							🚀 Core Benefits
						</h3>
						<ul className="space-y-5 text-base leading-relaxed">
							{[
								"💸 Zero Cost, Maximum Impact — Be a part of a dynamic, growing business community—completely free.",
								"🤝 Weekly Networking Meets — Structured sessions to build visibility, credibility, and profitability.",
								"🎯 Quality Referrals — Get real business leads from trusted professionals who understand your work.",
								"📚 Knowledge Sharing — Gain insights from seasoned entrepreneurs and diverse industries.",
								"🤗 Support System — Surround yourself with mentors, collaborators, and problem-solvers.",
								"🌍 Local to Global Reach — Expand through city-wide chapters and global pitch clubs.",
							].map((text, i) => (
								<li key={i} className="flex items-start gap-3 text-gray-700">
									<FaCheckCircle className="text-red-500 mt-1 shrink-0" />
									<span>{text}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Bonus Highlights */}
					<div className="bg-white p-8 rounded-3xl shadow-lg border border-red-200 hover:shadow-xl transition duration-300">
						<h3 className="text-2xl font-bold text-red-600 mb-6">
							✨ Bonus Highlights
						</h3>
						<ul className="space-y-5 text-base leading-relaxed">
							{[
								"🎤 Speaking Opportunities — Showcase your expertise in workshops, panels, and guest sessions.",
								"🏆 Recognition & Awards — Get acknowledged through monthly testimonials and shout-outs.",
								"📣 Digital Visibility — Amplify your brand through WEN&apos;s social media & PR network.",
								"📈 Upskilling Platforms — Learn new skills via sessions from EduTech & Training teams.",
							].map((text, i) => (
								<li key={i} className="flex items-start gap-3 text-gray-700">
									<FaCheckCircle className="text-red-500 mt-1 shrink-0" />
									<span>{text}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
