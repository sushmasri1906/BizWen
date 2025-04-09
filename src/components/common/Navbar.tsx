"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const navLinks = [
		{ name: "Home", href: "/" },
		// { name: "About", href: "/about" },

		{ name: "Events", href: "/events" },
		{ name: "Mission", href: "/mission" },
	];

	return (
		<nav className="bg-white shadow-sm py-2">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-4">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<div className="h-[80px] w-[80px] overflow-hidden rounded-b-full">
						<Image
							src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744194981/WEN_Logo_1_s99dua.png"
							alt="WEN Logo"
							width={100}
							height={100}
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
							className={`text-sm font-semibold ${
								pathname === link.href
									? "text-red-600"
									: "text-slate-900 hover:text-red-600"
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
