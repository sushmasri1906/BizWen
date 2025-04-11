"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

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

				{/* Nav Links */}
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
			</div>
		</nav>
	);
};

export default Navbar;
