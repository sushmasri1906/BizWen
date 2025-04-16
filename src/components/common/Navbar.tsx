"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Events", href: "/events" },
		{ name: "Mission", href: "/mission" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:py-3">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png"
						alt="WEN Logo"
						width={120}
						height={40}
						className="object-contain w-32 h-auto"
						priority
						quality={100} // Ensures high quality
					/>
				</Link>

				{/* Desktop Nav Links */}
				<div className="hidden md:flex space-x-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`text-sm font-semibold transition-colors hover:text-red-500 ${
								pathname === link.href ? "text-red-600" : "text-black"
							}`}>
							{link.name}
						</Link>
					))}
				</div>

				{/* Mobile Menu Icon */}
				<div className="md:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? (
							<HiX className="w-6 h-6 text-black" />
						) : (
							<HiMenu className="w-6 h-6 text-black" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<motion.div
					className="md:hidden bg-white px-6 pb-4 pt-2 shadow-md"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.3 }}>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className={`block py-2 text-sm font-semibold transition-colors hover:text-red-500 ${
								pathname === link.href ? "text-red-600" : "text-black"
							}`}>
							{link.name}
						</Link>
					))}
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
