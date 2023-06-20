import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutUsCard from "../components/Cards/about-us-card";

export default function AboutUs() {
    return (
        <>
            <Header />
            <section>
                <div className="bg-primary-light page-border">
                    <div className="max-w-full py-3 md:py-7 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full flex items-center">
                            <div className="page-heading w-2/4 inline-block float-left">
                                <div className="heading">
                                    <h1 className="text-primary-color font-semibold tracking-2 text-xl md:text-2xl lg:text-28 xl:text-28 2xl:text-28">システムについて</h1>
                                </div>
                                <div className="paragraph pt-4 lg:pt-8 xl:pt-8 2xl:pt-8">
                                    <p className="text-custom-black font-medium tracking-2 leading-7 text-base md:text-lg lg:text-22 xl:text-22 2xl:text-22">「無料de相続」は相続税専門の税理士が監修している無料の相続税申告書作成ソフトです。</p>
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
            <section className='pt-5 lg:pt-0 xl:pt-0 2xl:pt-0' id='section-2'>
                <div className='max-w-full mx-auto px-4 md:px-8 lg:px-0 xl:px-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                    <div className="text-center py-3 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            誰でも簡単に分かりやすく
                        </h5>
                        <div className='paragraph mt-8 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12'>
                            <p className='text-custom-black text-justify lg:text-center xl:text-center 2xl:text-center font-medium tracking-2 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>必要書類を集めて必要事項を入力するだけで、相続税申告書及び遺産分割協議書を作成することができます。</p>
                        </div>
                    </div>

                    <div className='feature-section py-5'>
                        <div className='block md:flex lg:flex xl:flex 2xl:flex'>
                            <div className='feature-one w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12'>
                                <div className='feature-image'>
                                    <Image
                                        className="feature-img w-full"
                                        src="/top/feature-img.png"
                                        alt="mine-life"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                            <div className='feature-content w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:pl-7 lg:pl-14 xl:pl-14 2xl:pl-14'>
                                <div className='heading mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <h3 className='text-custom-black font-bold md:text-28 lg:text-28 xl:text-28 2xl:text-28'>相続税申告書の作成を簡単に分かりやすく！</h3>
                                </div>
                                <div className='paragraph mt-4 lg:mt-7 xl:mt-7 2xl:mt-7'>
                                    <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>「無料de相続」は、相続税専門の税理士法人に監修をいただき、相続税申告を可能な限り簡単に分かりやすく作成することができるシステムです。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    


                    <div className='feature-section pt-2 lg:pt-24 xl:pt-24 2xl:pt-24'>
                        <div className='block md:flex lg:flex xl:flex 2xl:flex'>
                            <div className='feature-content w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:pr-7 lg:pr-14 xl:pr-14 2xl:pr-14'>
                                <div className='heading mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <h3 className='text-custom-black font-bold md:text-28 lg:text-28 xl:text-28 2xl:text-28'>遺産分割協議書の作成が可能に！</h3>
                                </div>
                                <div className='paragraph mt-4 lg:mt-7 xl:mt-7 2xl:mt-7'>
                                    <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>「無料de相続」では不動産の相続登記、預貯金・有価証券の名義変更が可能な遺産分割協議書の作成が可能になっています。(登記簿謄本の入力をした場合) </p>
                                </div>
                            </div>
                            <div className='feature-one mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12'>
                                <div className='feature-image'>
                                    <Image
                                        className="feature-img w-full"
                                        src="/top/feature-img.png"
                                        alt="mine-life"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='feature-section py-5 pt-2 lg:pt-24 xl:pt-24 2xl:pt-24'>
                        <div className='block md:flex lg:flex xl:flex 2xl:flex'>
                            <div className='feature-one w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12'>
                                <div className='feature-image'>
                                    <Image
                                        className="feature-img w-full"
                                        src="/top/feature-img.png"
                                        alt="mine-life"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                            <div className='feature-content w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:pl-7 lg:pl-14 xl:pl-14 2xl:pl-14'>
                                <div className='heading mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <h3 className='text-custom-black font-bold md:text-28 lg:text-28 xl:text-28 2xl:text-28'>入力を終えたら申告書を印刷して税務署に提出するだけ！</h3>
                                </div>
                                <div className='paragraph mt-4 lg:mt-7 xl:mt-7 2xl:mt-7'>
                                    <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>入力が終わったら相続税申告書を印刷することができます。納税が必要な場合には税務署で納付書を取得して納税をしてください。</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    
                </div>
            </section>
            <section className="pt-10" id="scetion-3">
                <div className="max-w-full mx-auto px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
                    <div className="text-center py-0 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            税理士に依頼した方が良いケース
                        </h5>
                        <div className='paragraph mt-8 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12'>
                            <p className='text-custom-black text-justify lg:text-center xl:text-center 2xl:text-center font-medium tracking-2 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>「無料de相続」は、誰でも無料で相続税申告書を作成することができますが、下記のような場合は税理士に依頼した方が税額を少なくすることができる可能性があります。</p>
                        </div>
                    </div>
                    <div className="bg">
                        <div>
                            <Image
                                className="feature-img pb-2"
                                src="/bg/arrow-bg.png"
                                alt="mine-life"
                                width={80}
                                height={0}
                                priority />
                        </div>
                        <div className="about-us-card">
                            <AboutUsCard />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}