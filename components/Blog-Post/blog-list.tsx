import React from "react";
import Image from "next/image";
import PostPreview from "../post-preview";
import Link from "next/link";

export default function BlogListDetails({ posts }) {

    return (
        <ul>
            {posts.map(({ node }) => (
                <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">
                    <div className="flex items-center">
                        <div className="latest-post-image w-4/12 inline-block float-left">
                            <Image
                                className="mx-auto w-full object-cover"
                                src={node.featuredImage}
                                alt="mine-life"
                                width={100}
                                height={100}
                                priority />
                        </div>
                        <div className="latest-post-details w-7/12 inline-block float-left pl-3">
                            <div className="latest-post-heading">
                                <h5 className="text-sm text-black font-semibold">{node.title}</h5>
                            </div>
                            <div className="latest-post-date mt-3">
                                <p className="text-xs text-black font-semibold">{node.date}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}


