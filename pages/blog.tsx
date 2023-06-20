import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetStaticProps } from 'next';
import { getAllPostsForHome } from '../lib/api';

export default function BlogList({ allPosts: { edges } }) {    
    const morePosts = edges.slice(0)     
    
    return (
        <>
            <Header />
            <section>
                <div className="bg-primary-light page-border">
                    <div className="max-w-full py-3 md:py-7 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full flex items-center">
                            <div className="page-heading w-2/4 inline-block float-left">
                                <div className="heading">
                                    <h1 className="text-primary-color font-semibold tracking-2 text-xl md:text-2xl lg:text-28 xl:text-28 2xl:text-28">お役立ち情報</h1>
                                </div>
                            </div>
                            <div className="w-2/4 inline-block float-left">
                                <Image
                                    className="mx-auto w-28 md:w-32 float-right"
                                    src="/bg/about-us.png"
                                    alt="mine-life"
                                    width={170}
                                    height={170}
                                    priority />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5" id="section-1">
                <div className='max-w-full mx-auto py-0 lg:py-5 xl:py-5 2xl:py-5 px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                    <div className="text-center py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-32 lg:text-32 xl:text-32 2xl:text-32 font-bold">
                            お役立ち情報
                        </h5>
                    </div>
                    <div className="py-5 hidden md:block lg:block xl:block 2xl:block">
                        {morePosts.map((MorePosts, index) => {
                            let date = MorePosts.node.date;
                            const Arraydate = date.split("T");
                            console.log("morePosts:" + JSON.stringify(MorePosts.node.id));
                            return (
                                <div className="flex bg-custom-gray shadow-normal mt-10">
                                    <div className="blog-image w-1/3 inline-block float-left">
                                        <Image
                                            className="mx-auto w-full md:h-260 object-cover"
                                            src={MorePosts.node.featuredImage.node.sourceUrl}
                                            alt="mine-life"
                                            width={170}
                                            height={170}
                                            priority />
                                    </div>
                                    <div className="blog-contents w-2/3 inline-block float-left px-5 py-7">
                                        <div className="title">
                                            <h5 className="text-primary-color tracking-2 leading-7 font-semibold text-lg md:text-2xl lg:text-28 xl:text-28 2xl:text-28">{MorePosts.node.title}</h5>
                                        </div>
                                        <div className="date mt-3">
                                            <span className="text-black text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">{Arraydate[0]}</span>
                                        </div>
                                        <div className="blog-paragraph mt-3">
                                            <p className="text-black tracking-2 leading-7 font-medium text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">{MorePosts.node.excerpt}</p>
                                        </div>
                                        <div className="date mt-3">
                                            <span className="text-primary-color float-right Poppins text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                                <Link className="flex items-center" href={`/blog-details`}>Read more
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mobile-post py-2 block md:hidden lg:hidden xl:hidden 2xl:hidden">
                        {morePosts.map((MorePosts, index) => {
                            let date = MorePosts.node.date;
                            const Arraydate = date.split("T");
                            return (
                                <div className="w-full inline-block shadow-normal mt-8">
                                    <div className="mobile-post-image">
                                        <Image
                                            className="mx-auto w-full h-300 object-cover"
                                            src={MorePosts.node.featuredImage.node.sourceUrl}
                                            alt="mine-life"
                                            width={170}
                                            height={170}
                                            priority />
                                    </div>
                                    <div className="bg-custom-gray">
                                        <div className="p-3">
                                            <div className="title">
                                                <h5 className="text-primary-color tracking-2 leading-7 font-semibold text-lg md:text-2xl lg:text-28 xl:text-28 2xl:text-28">{MorePosts.node.title}</h5>
                                            </div>
                                            <div className="date mt-3">
                                                <span className="text-black text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">{Arraydate[0]}</span>
                                            </div>
                                            <div className="blog-paragraph mt-3">
                                                <p className="text-black tracking-2 leading-7 font-medium text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">{MorePosts.node.excerpt}</p>
                                            </div>
                                            <div className="date w-full inline-block mt-3">
                                                <span className="text-primary-color float-right Poppins text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                                    <Link className="flex items-center" href={`/blog-details`}>Read more
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: { allPosts, preview },
        revalidate: 10,
    }
}
