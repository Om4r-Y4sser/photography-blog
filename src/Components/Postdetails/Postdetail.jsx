import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/posts.json";
import Hero from "./Hero/Hero";
import PostContent from './PostContent/PostContent';
import YouMayLike from './YouMayLike/YouMayLike';

export default function PostDetails() {

    const { slug } = useParams();

    const post = data.posts.find((post) => post.slug === slug);

    return (
    <div className="post-details">
        <Hero post={post} />
        <PostContent post={post} />
        <YouMayLike post={post} />

    </div>
);
}