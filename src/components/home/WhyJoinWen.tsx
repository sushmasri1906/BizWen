"use client";

import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyJoinWEN() {
	return (
		<section className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 text-white">
			<div className="max-w-7xl mx-auto">
				{/* Title and Description with Animation */}
				<div className="text-center mb-14">
					<motion.h2
						className="text-4xl md:text-5xl font-extrabold mb-4 text-red-600"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}>
						Why WEN?
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}>
						Whether you&apos;re just starting out or scaling up, WEN empowers
						women entrepreneurs with meaningful connections, hands-on support,
						and unmatched visibility{" "}
						<strong>in a thriving and inclusive community.</strong>
					</motion.p>
				</div>

				{/* Grid of Benefits and Highlights with Animations */}
				<div className="grid gap-12 md:grid-cols-2">
					{/* Core Benefits with Animation */}
					<motion.div
						className="bg-white p-8 shadow-lg rounded-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.4 }}>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Core Benefits
						</h2>
						<ul className="space-y-5 text-base leading-relaxed text-gray-700">
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
								<motion.li
									key={i}
									className="flex items-start gap-3"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.6 + i * 0.2 }}>
									<FaCheckCircle className="text-red-600 mt-1 shrink-0" />
									<span>
										<strong>{item.title}</strong>
										<br />
										{item.desc}
									</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Bonus Highlights with Animation */}
					<motion.div
						className="bg-white p-8 shadow-lg hover:shadow-xl transition duration-300 rounded-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.8 }}>
						<h3 className="text-2xl font-bold text-gray-900 mb-6">
							Bonus Highlights
						</h3>
						<ul className="space-y-5 text-base leading-relaxed text-gray-700">
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
								<motion.li
									key={i}
									className="flex items-start gap-3"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 1 + i * 0.2 }}>
									<FaCheckCircle className="text-red-600 mt-1 shrink-0" />
									<span>
										<strong>{item.title}</strong>
										<br />
										{item.desc}
									</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
