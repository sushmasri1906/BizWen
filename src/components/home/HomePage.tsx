import React from "react";
import Hero from "./Hero";
import About from "./About";
import Community from "./Community";
import Header from "./Header";
import WhyJoinWEN from "./WhyJoinWen";
import JoinWEN from "./JoinWEN";

function HomePage() {
	return (
		<>
			<Header />
			<About />
			<WhyJoinWEN />
			<JoinWEN />
			
			<Community />
			<Hero />
		</>
	);
}

export default HomePage;
