"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhyJoinWEN() {
	return (
		<section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-extrabold text-center text-red-600 mb-4">
					Why Join WEN?
				</h2>
				<p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
					Be part of a vibrant ecosystem designed to help women entrepreneurs
					thrive through collaboration, knowledge, and meaningful connections.
				</p>

				<div className="grid gap-10 md:grid-cols-2">
					{/* Core Benefits */}
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-red-600 hover:shadow-md transition">
						<h3 className="text-2xl font-semibold text-red-500 mb-6">
							Core Benefits
						</h3>
						<ul className="space-y-5">
							{[
								"Zero Cost, Maximum Impact — Be a part of a dynamic, growing business community—completely free.",
								"Weekly Networking Meets — Structured sessions to build visibility, credibility, and profitability.",
								"Quality Referrals — Get real business leads from trusted professionals who understand your work.",
								"Knowledge Sharing — Gain insights from seasoned entrepreneurs and diverse industries.",
								"Support System — Surround yourself with mentors, collaborators, and problem-solvers.",
								"Local to Global Reach — Expand through city-wide chapters and global pitch clubs.",
							].map((text, i) => (
								<li key={i} className="flex items-start gap-3 text-gray-700">
									<FaCheckCircle className="text-red-500 mt-1 shrink-0" />
									<span>{text}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Bonus Highlights */}
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-red-600 hover:shadow-md transition">
						<h3 className="text-2xl font-semibold text-red-500 mb-6">
							✨ Bonus Highlights
						</h3>
						<ul className="space-y-5">
							{[
								"Speaking Opportunities — Showcase your expertise in workshops, panels, and guest sessions.",
								"Recognition & Awards — Get acknowledged through monthly testimonials and shout-outs.",
								"Digital Visibility — Amplify your brand through WEN’s social media & PR network.",
								"Upskilling Platforms — Learn new skills via sessions from EduTech & Training teams.",
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
