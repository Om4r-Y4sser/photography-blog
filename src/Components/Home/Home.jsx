import React from "react";
import Hero from "./Hero/Hero";
import FeaturedArticles from "./Featured/FeaturedArticles";
import LatestArticles from "./Latest/LatestArticles";
import Categories from "./Categories/Categories";

export default function Home() {
    return (
        <main className="home">
            <Hero />
            <FeaturedArticles />
            <LatestArticles />
            <Categories />
        </main>
    );
}