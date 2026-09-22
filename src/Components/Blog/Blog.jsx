import React from "react";

import data from "../../data/posts.json";
import BlogHero from './hero/BlogHero';
import Content from './content/Content';



export default function Blog() {

    const posts = data.posts;

    return (<div className=" bg-black">
        <BlogHero/>
        <Content posts={posts} />    
        </div>

);
}