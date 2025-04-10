import React from "react";
import Hero from "./Hero";
import About from "./About";
import Community from "./Community";
import Header from "./Header";

function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<Community />

			<About />
		</>
	);
}

export default HomePage;
