"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhyJoinWEN() {
	return (
		<section className="bg-red-600 py-10 px-6 md:px-12 lg:px-24 text-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4">Why WEN?</h2>
					<p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
						Whether you&apos;re just starting out or scaling up, WEN empowers
						women entrepreneurs with meaningful connections, hands-on support,
						and unmatched visibility{" "}
						<strong>in a thriving and inclusive community.</strong>
					</p>
				</div>

				<div className="grid gap-12 md:grid-cols-2">
					<div className="bg-white p-8 rounded-3xl shadow-lg">
						<h2 className="text-2xl font-bold text-black mb-6">
							Core Benefits
						</h2>
						<ul className="space-y-5 text-base leading-relaxed text-black">
							{[
								{
									title: "Zero Cost, Maximum Impact",
									desc: "Be a part of a dynamic, growing business community completely free.",
								},
								{
									title: "Weekly Networking Meets",
									desc: "Structured sessions to build visibility, credibility, and profitability.",
								},
								{
									title: "Quality Referrals",
									desc: "Get real business leads from trusted professionals who understand your work.",
								},
								{
									title: "Knowledge Sharing",
									desc: "Gain insights from seasoned entrepreneurs and diverse industries.",
								},
								{
									title: "Support System",
									desc: "Surround yourself with mentors, collaborators, and problem-solvers.",
								},
								{
									title: "Local to Global Reach",
									desc: "Expand through city-wide chapters and global pitch clubs.",
								},
							].map((item, i) => (
								<li key={i} className="flex items-start gap-3">
									<FaCheckCircle className="text-red-600 mt-1 shrink-0" />
									<span>
										<strong>{item.title}</strong>
										<br />
										{item.desc}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className="bg-white p-8  shadow-lg hover:shadow-xl transition duration-300">
						<h3 className="text-2xl font-bold text-black mb-6">
							Bonus Highlights
						</h3>
						<ul className="space-y-5 text-base leading-relaxed text-black">
							{[
								{
									title: "Speaking Opportunities",
									desc: "Showcase your expertise in workshops, panels, and guest sessions.",
								},
								{
									title: "Recognition & Awards",
									desc: "Get acknowledged through monthly testimonials and shout-outs.",
								},
								{
									title: "Digital Visibility",
									desc: "Amplify your brand through WEN's social media & PR network.",
								},
								{
									title: "Upskilling Platforms",
									desc: "Learn new skills via sessions from EduTech & Training teams.",
								},
							].map((item, i) => (
								<li key={i} className="flex items-start gap-3">
									<FaCheckCircle className="text-red-600 mt-1 shrink-0" />
									<span>
										<strong>{item.title}</strong>
										<br />
										{item.desc}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
