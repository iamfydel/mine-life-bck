import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import PostPreview from '../components/post-preview'

export default function BlogDetails({ allPosts: { edges } }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)
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
            <section className="section-2 py-10">
                <div className="max-w-full mx-auto py-0 lg:py-5 xl:py-5 2xl:py-5 px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
                    <div className="w-full inline-block">
                        <div className="w-full lg:w-8/12 xl:w-8/12 2xl:w-8/12 float-left mr-20">
                            <div className="blog-details">
                                <div className="blog-details-image w-full inline-block">
                                    <Image
                                        className="mx-auto w-full object-cover"
                                        src="/dummy.png"
                                        alt="mine-life"
                                        width={170}
                                        height={170}
                                        priority />
                                </div>
                                <div className="bg-custom-gray px-5">
                                    <div className="py-5">
                                        <div className="blog-details-contents">
                                            <div className="title">
                                                <h5 className="text-primary-color tracking-2 leading-7 font-semibold text-lg md:text-2xl lg:text-28 xl:text-28 2xl:text-28">税理士法人マインライフへ</h5>
                                            </div>
                                            <div className="date mt-3">
                                                <span className="text-black text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">2021年02月25日</span>
                                            </div>
                                            <div className="blog-details-paragraph mt-3">
                                                <p className="text-black tracking-2 leading-7 font-medium text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">IC税理士事務所は２年間千葉県を中心に税務相談、税務申告を行ってまいりましたが、この度税理士法人となり、税理士法人マインライフとして東京都新宿区に本店を開設し、千葉県、東京都を中心に首都圏全域で業務を行うことになりました。税理士法人マインライフのHPは下記より税理士法人となることで、社員一同お客様に一層質の高い税務サポートを行ってまいります。</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-10 2xl:mt-10 blog-btn-sec flex">
                                            <div className="block submit-btn text-center">
                                                <button className="text-white px-7 font-medium font-sm btn-submit btn-gradient btn-medium">
                                                    戻る
                                                </button>
                                            </div>
                                            <div className="block submit-btn text-center">
                                                <button className="text-white px-7 font-medium font-sm btn-submit btn-gradient btn-medium">
                                                    最新の記事です
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 float-left">
                            <div className="category-section border">
                                <div className="category-heading bg-primary-light px-3 py-2">
                                    <h5 className="text-primary-color tracking-2 font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">カテゴリー</h5>
                                </div>
                                <div className="category-list px-8">
                                    <ul>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">お知らせ</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="latest-post-section border mt-10 lg:mt-20 xl:mt-20 2xl:mt-20">
                                <div className="latest-post-heading bg-primary-light px-3 py-2">
                                    <h5 className="text-primary-color tracking-2 font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">最新記事</h5>
                                </div>
                                <div className="latest-post-list px-8">
                                    <ul>
                                        {/* {posts.map(({ node }) => (
                                            <PostPreview
                                                key={node.slug}
                                                title={node.title}
                                                coverImage={node.featuredImage}
                                                date={node.date}
                                                author={node.author}
                                                slug={node.slug}
                                                excerpt={node.excerpt}
                                            />
                                        ))} */}


                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">
                                            <div className="flex items-center">
                                                <div className="latest-post-image w-4/12 inline-block float-left">
                                                    <Image
                                                        className="mx-auto w-full object-cover"
                                                        src="/dummy.png"
                                                        alt="mine-life"
                                                        width={100}
                                                        height={100}
                                                        priority />
                                                </div>
                                                <div className="latest-post-details w-7/12 inline-block float-left pl-3">
                                                    <div className="latest-post-heading">
                                                        <h5 className="text-sm text-black font-semibold">税理士法人マインライフへ</h5>
                                                    </div>
                                                    <div className="latest-post-date mt-3">
                                                        <p className="text-xs text-black font-semibold">2021年02月25日</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">
                                            <div className="flex items-center">
                                                <div className="latest-post-image w-4/12 inline-block float-left">
                                                    <Image
                                                        className="mx-auto w-full object-cover"
                                                        src="/dummy.png"
                                                        alt="mine-life"
                                                        width={100}
                                                        height={100}
                                                        priority />
                                                </div>
                                                <div className="latest-post-details w-7/12 inline-block float-left pl-3">
                                                    <div className="latest-post-heading">
                                                        <h5 className="text-sm text-black font-semibold">税理士法人マインライフへ</h5>
                                                    </div>
                                                    <div className="latest-post-date mt-3">
                                                        <p className="text-xs text-black font-semibold">2021年02月25日</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="w-full border-b-2 tracking-2 text-black text-sm font-medium py-3">
                                            <div className="flex items-center">
                                                <div className="latest-post-image w-4/12 inline-block float-left">
                                                    <Image
                                                        className="mx-auto w-full object-cover"
                                                        src="/dummy.png"
                                                        alt="mine-life"
                                                        width={100}
                                                        height={100}
                                                        priority />
                                                </div>
                                                <div className="latest-post-details w-7/12 inline-block float-left pl-3">
                                                    <div className="latest-post-heading">
                                                        <h5 className="text-sm text-black font-semibold">税理士法人マインライフへ</h5>
                                                    </div>
                                                    <div className="latest-post-date mt-3">
                                                        <p className="text-xs text-black font-semibold">2021年02月25日</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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