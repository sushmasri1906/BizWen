"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Events", href: "/events" },
		{ name: "Mission", href: "/mission" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<div className="h-[60px] w-[60px] overflow-hidden rounded-b-full">
						<Image
							src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744194981/WEN_Logo_1_s99dua.png"
							alt="WEN Logo"
							width={60}
							height={60}
							className="object-cover"
						/>
					</div>
				</Link>

				{/* Desktop Nav Links */}
				<div className="hidden md:flex space-x-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`text-sm font-semibold transition-colors ${
								pathname === link.href
									? "text-red-600"
									: "text-black hover:text-red-500"
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
				<div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-4 pt-2 shadow-md">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className={`block py-2 text-sm font-semibold ${
								pathname === link.href
									? "text-red-600"
									: "text-black hover:text-red-500"
							}`}>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
