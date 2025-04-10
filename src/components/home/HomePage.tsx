import React from "react";
import Hero from "./Hero";
import About from "./About";
import Community from "./Community";
import Header from "./Header";

function HomePage() {
	return (
		<>
			<Header />
			<About />
			<Community />
			<Hero />
		</>
	);
}

export default HomePage;
