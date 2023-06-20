import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function CompanyProfile() {
    return (
        <>
            <Header />
            <section>
                <div className="bg-primary-light page-border">
                    <div className="max-w-full py-3 md:py-7 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full flex items-center">
                            <div className="page-heading w-2/4 inline-block float-left">
                                <div className="heading">
                                    <h1 className="text-primary-color font-semibold tracking-2 text-xl md:text-2xl lg:text-28 xl:text-28 2xl:text-28">会社概要</h1>
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
            <section id="section-1">
                <div className='max-w-full py-5 md:py-8 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto'>
                    <div className="text-center py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-32 lg:text-32 xl:text-32 2xl:text-32 font-bold">
                            会社概要
                        </h5>
                    </div>
                    <div className="w-full inline-block py-2">
                        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <div className="w-full py-5">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">商号</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">株式会社マインライフ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">設立</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">2022年9月26日</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">資本金</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">300万円　</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">役員</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">代表取締役 門倉 誉士希 </p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">取締役 伊藤 千尋 </p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">取締役 久保 佑介</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">取締役 川崎 朝輝</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">所在地</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">千葉県習志野市津田沼七丁目10番8-101</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <div className="profile-image">
                                <Image
                                    className="mx-auto object-cover"
                                    src="/company/hero-image.png"
                                    alt="mine-life"
                                    width={400}
                                    height={400}
                                    priority />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section id="section-2">
                <div className='max-w-full py-5 md:py-8 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg px-4 md:px-8 lg:px-0 xl:px-0 mx-auto'>
                    <div className="text-center py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-32 lg:text-32 xl:text-32 2xl:text-32 font-bold">
                            監修税理士法人概要
                        </h5>
                    </div>
                    <div className="w-full inline-block py-2">
                        <div className="w-full inline-block float-left">
                            <div className="w-full py-5">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">名称</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">税理士法人マインライフ
                                            （税理士法人番号 第5095号）</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">取扱業務</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">2022年9月26日</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">資本金</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">相続税申告
                                            相続・事業承継対策
                                            その他資産税関連業務</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">代表社員</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking- leading-7 text-base">統括代表社員 門倉 誉士希 税理士登録番号129249</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">代表社員 伊藤 千尋 税理士登録番号136705</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">代表社員 久保 佑介 税理士登録番号140334

                                        </p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">代表社員 川崎 朝輝 税理士登録番号145456</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">所在地</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">東京事務所（本社）</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">〒160-0022</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">東京都新宿区新宿4-3-17
                                            FORECAST新宿SOUTH 6階
                                        </p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">千葉事務所</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 text-base">〒275-0016</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">千葉県習志野市津田沼7-10-8</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">電話番号</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">03-6856-4314</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium Poppins text-base">email</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium Poppins text-base">conatct@mine-life.jp</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">設立日</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">令和3年1月8日</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full inline-block py-2">
                                <div className="w-4/12 md:w-1/4 lg:w-19 xl:w-19 2xl:w-19 inline-block float-left">
                                    <div className="company-details">
                                        <p className="text-black font-medium tracking-2 text-base">所属団体</p>
                                    </div>
                                </div>
                                <div className="w-8/12 inline-block float-left">
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">東京税理士会 四谷支部（東京事務所）</p>
                                    </div>
                                    <div className="w-full inline-block company-details">
                                        <p className="text-black font-medium tracking-2 leading-7 text-base">千葉税理士会 千葉西支部（千葉事務所）</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}