import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopPageCards from '../components/Cards/top-page-cards';
import FadeInDown from '../components/Animation/fade-in-down';
import Index from './index-1';

export default function Top() {
    const StepCards = [
        {
            step: "Step 02",
            title: "確認・修正",
            src: "/top/step-2.png",
            description: "必要書類を集めて、必要事項を入力します。",
            width: 150
        },
        {
            step: "Step 03",
            title: "情報入力",
            src: "/top/step-3.png",
            description: "入力の途中で適時修正が可能です。",
            width: 120
        },
        {
            step: "Step 04",
            title: "印刷、提出",
            src: "/top/step-4.png",
            description: "印刷して税務署に提出します。(不明な点がございましたら有料で税理士に相談も可能です)",
            width: 230
        }
    ]
    return (
        <div className='top-page bg-white'>
            <div className="top-bg-color-1 top-banner-bg bg-no-repeat bg-top bg-[url('/bg/top-banner-bg.png')]">
                <div className='bg-primary-light'>
                    <div className="max-w-full py-5 md:py-14 lg:py-20 xl:py-20 2xl:py-20 px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="lg:flex xl:flex justify-between">
                            <div className="w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 float-left">
                                <h2 className="gradient-top font-semibold text-custom-black tracking-2 text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                                    無料DE相続～申告書
                                </h2>
                                <h2 className="gradient-top mt-5 md:mt-7 lg:mt-10 xl:mt-10 2xl:mt-10 font-semibold text-custom-black tracking-2 text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                                    協議書 自動作成システム～
                                </h2>

                                <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-8 2xl:mt-8">
                                    <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-custom-black leading-7 tracking-2 font-medium">
                                        当システムは、税理士法人マインライフが監修している相続税申告書、遺産分割協議書の作成、印刷後に税務署への提出ができる無料で利用可能なシステムです。
                                    </p>
                                </div>

                                <div className="mt-6 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12 hidden lg:block xl:block 2xl:block">
                                    <button className="arrow btn-gradient text-white px-3 py-2 shadow-normal">
                                        <span className="font-medium">
                                            無料で利用開始
                                        </span>
                                    </button>
                                </div>

                            </div>

                            <div className="top-sec-image w-full contents float-right lg:w-6/12 xl:w-6/12 2xl:w-6/12 mt-5 lg:mt-0 xl:mt-0">
                                <Image
                                    className="w-500"
                                    src="/bg/top-banner-img.png"
                                    alt="mine-life"
                                    width={700}
                                    height={100}
                                    priority />
                            </div>
                            <div className="mt-2 pb-5 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12 block lg:hidden xl:hidden 2xl:hidden">
                                <button className="arrow btn-gradient text-white px-3 py-2 shadow-normal">
                                    <span className="font-medium">
                                        無料で利用開始
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='px-4 md:px-8 lg:px-0 xl:px-0' id='section-2'>
                <div className="text-center py-8 md:py-10 lg:py-14 xl:py-14 2xl:py-14">
                    <FadeInDown animateIn="fadeInDown" delay={1 * 1000}>
                        <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            こんな方におすすめです
                        </h5>
                    </FadeInDown>
                </div>
                <div className='max-w-full mx-auto py-0 lg:py-5 xl:py-5 2xl:py-5 px-4 md:px-0 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                    <TopPageCards></TopPageCards>
                </div>
            </section>
            <section id='section-3'>
                <div className="bg-primary-light px-4 md:px-8 lg:px-0 xl:px-0 py-7 md:py-10 lg:py-14 xl:py-14 2xl:py-14 bg-no-repeat bg-center bg-cover bg-[url('/bg/feature-bg.png')]">
                    <div className="text-center py-5 md:py-7 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            こんな課題を解決します
                        </h5>
                        <div className='paragraph mt-8 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-12'>
                            <p className='text-custom-black text-justify lg:text-center xl:text-center 2xl:text-center font-medium tracking-2 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>当システムは、知識がない方でも可能な限り分かりやすく簡単に相続税申告が可能な申告書・協議書作成システムです。</p>
                        </div>
                    </div>
                    <div className='points-section max-w-full lg:max-w-4xl xl:max-w-4xl 2xl:max-w-4xl mx-auto py-5'>
                        <div className='flex items-center'>
                            <div className='point-bg bg-white w-3/12 md:w-12 lg:w-10 xl:w-10 2xl:w-10 inline-block float-left text-center rounded-md py-3 px-0 md:py-2 lg:py-2 xl:py-2 2xl:py-2 md:px-4 lg:px-4 xl:px-4 2xl:px-4'>
                                <span className='text-points-color font-medium text-xs'>
                                    ポイント
                                </span>
                                <h1 className='Poppins text-points-color font-bold text-4xl'>
                                    01
                                </h1>
                            </div>
                            <div className='ml-5 w-9/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 inline-block float-left'>
                                <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>自分で相続税申告を作成しようとしても書類が複雑で作成できない。</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-6'>
                            <div className='point-bg bg-white w-3/12 md:w-12 lg:w-10 xl:w-10 2xl:w-10 inline-block float-left text-center rounded-md py-3 px-0 md:py-2 lg:py-2 xl:py-2 2xl:py-2 md:px-4 lg:px-4 xl:px-4 2xl:px-4'>
                                <span className='text-points-color font-medium text-xs'>
                                    ポイント
                                </span>
                                <h1 className='Poppins text-points-color font-bold text-4xl'>
                                    02
                                </h1>
                            </div>
                            <div className='ml-5 w-9/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 inline-block float-left'>
                                <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>申告書は自分で作成できたが、内容に問題がないか税理士に相談をしたい。</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-6'>
                            <div className='point-bg bg-white w-3/12 md:w-12 lg:w-10 xl:w-10 2xl:w-10 inline-block float-left text-center rounded-md py-3 px-0 md:py-2 lg:py-2 xl:py-2 2xl:py-2 md:px-4 lg:px-4 xl:px-4 2xl:px-4'>
                                <span className='text-points-color font-medium text-xs'>
                                    ポイント
                                </span>
                                <h1 className='Poppins text-points-color font-bold text-4xl'>
                                    03
                                </h1>
                            </div>
                            <div className='ml-5 w-9/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 inline-block float-left'>
                                <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>相続税申告書だけでなく、遺産分割協議書も作成したい。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-full mx-auto py-0 lg:py-5 xl:py-5 2xl:py-5 px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl" id='section-4'>
                <div className='py-7 md:py-10 lg:py-14 xl:py-14 2xl:py-14'>
                    <div className="text-center py-0 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            特徴
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
                                        className="feature-img"
                                        src="/top/feature-img.png"
                                        alt="mine-life"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                            <div className='feature-content w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:pl-7'>
                                <div className='heading mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <h3 className='text-custom-black font-bold md:text-28 lg:text-28 xl:text-28 2xl:text-28'>相続税申告書の作成</h3>
                                </div>
                                <div className='paragraph mt-4 lg:mt-7 xl:mt-7 2xl:mt-7'>
                                    <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>配偶者の税額軽減及びご自宅の小規模宅地等の特例を使った相続税申告書の作成が可能です。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature-section pt-8'>
                        <div className='block md:flex lg:flex xl:flex 2xl:flex'>
                            <div className='feature-content w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:pr-7'>
                                <div className='heading mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <h3 className='text-custom-black font-bold md:text-28 lg:text-28 xl:text-28 2xl:text-28'>相続税申告書の作成</h3>
                                </div>
                                <div className='paragraph mt-4 lg:mt-7 xl:mt-7 2xl:mt-7'>
                                    <p className='text-custom-black tracking-2 font-medium text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>登記事項をそのまま入力する形になっているので、不動産の相続登記が可能な遺産分割協議書を作成することができます。(口座番号等の必要事項を入力すれば預貯金や有価証券の名義変更も可能です。)
                                    </p>
                                </div>
                            </div>
                            <div className='feature-one pl-0 lg:pl-14 xl:pl-14 2xl:pl-14 mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 w-full md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12'>
                                <div className='feature-image'>
                                    <Image
                                        className="feature-img"
                                        src="/top/feature-img.png"
                                        alt="mine-life"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='section-5' className="py-20 pb-0 bg-no-repeat step-card-bg-size bg-[url('/bg/step-card-bg.png')]">
                <div className='max-w-full mx-auto px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 xl:pb-20 2xl:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                    <div className="block md:flex lg:flex xl:flex 2xl:flex justify-between">
                        <div className='w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12'>
                            <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                                利用方法
                            </h5>
                            <p className='text-custom-black mt-5 font-medium leading-7 tracking-2 text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>誰でも無料で簡単に利用することができます。</p>
                            <p className='text-custom-black mt-1 lg:mt-5 xl:mt-5 2xl:mt-5 font-medium leading-7 tracking-2 text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>ご希望の方は、詳細な土地評価や特例の適用の可否判断を税理士に相談することもできます。</p>
                        </div>
                        <div className='block md:hidden lg:block xl:block 2xl:block w-full md:w-5/12 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                            <div className='step-card step-card-bg shadow-normal'>
                                <div className='flex justify-end'>
                                    <div className='step-image'>
                                        <Image
                                            className="step-img"
                                            src="/top/step-1.png"
                                            alt="mine-life"
                                            width={150}
                                            height={0}
                                            priority />
                                    </div>
                                    <div className='step-card-contents'>
                                        <div className='text-justify'>
                                            <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-white Poppins'>Step 1  <span>会員登録</span></h2>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-justify text-white text-sm md:text-base lg:text-base xl:text-base 2xl:text-base'>ID・パスワードを決めて会員登録します。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 lg:mt-20 xl:mt-20 2xl:mt-20 hidden md:flex lg:hidden xl:hidden 2xl:hidden justify-between'>
                        <div className='w-full md:w-48 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                            <div className='step-card step-card-bg shadow-normal'>
                                <div className='flex justify-end'>
                                    <div className='step-image'>
                                        <Image
                                            className="step-img"
                                            src="/top/step-1.png"
                                            alt="mine-life"
                                            width={150}
                                            height={0}
                                            priority />
                                    </div>
                                    <div className='step-card-contents'>
                                        <div className='text-justify'>
                                            <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-white Poppins'>Step 1  <span>会員登録</span></h2>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-justify text-white text-sm md:text-base lg:text-base xl:text-base 2xl:text-base'>ID・パスワードを決めて会員登録します。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-48 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                            <div className='step-card step-card-hover bg-white shadow-normal'>
                                <div className='flex justify-end'>
                                    <div className='step-image'>
                                        <Image
                                            className="step-img"
                                            src="/top/step-2.png"
                                            alt="mine-life"
                                            width={150}
                                            height={0}
                                            priority />
                                    </div>
                                    <div className='step-card-contents'>
                                        <div className='text-justify'>
                                            <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-primary-color Poppins'>Step 2  <span>確認・修正</span></h2>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-justify font-medium text-custom-black text-base'>必要書類を集めて、必要事項を入力します。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 hidden md:flex lg:hidden xl:hidden 2xl:hidden justify-between lg:mt-20 xl:mt-20 2xl:mt-20'>
                        <div className='w-full md:w-48 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                            <div className='step-card step-card-hover bg-white shadow-normal'>
                                <div className='flex justify-end'>
                                    <div className='step-image'>
                                        <Image
                                            className="step-img"
                                            src="/top/step-3.png"
                                            alt="mine-life"
                                            width={120}
                                            height={0}
                                            priority />
                                    </div>
                                    <div className='step-card-contents'>
                                        <div className='text-justify'>
                                            <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-primary-color Poppins'>Step 3  <span>情報入力</span></h2>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-justify font-medium text-custom-black text-base'>入力の途中で適時修正が可能です。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-48 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                            <div className='step-card step-card-hover bg-white shadow-normal'>
                                <div className='flex justify-end'>
                                    <div className='step-image'>
                                        <Image
                                            className="step-img"
                                            src="/top/step-4.png"
                                            alt="mine-life"
                                            width={230}
                                            height={0}
                                            priority />
                                    </div>
                                    <div className='step-card-contents'>
                                        <div className='text-justify'>
                                            <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-primary-color Poppins'>Step 4  <span>印刷、提出</span></h2>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-justify font-medium text-custom-black text-base'>印刷して税務署に提出します。(不明な点がございましたら有料で税理士に相談も可能です)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 block md:hidden lg:block xl:block 2xl:block lg:mt-20 xl:mt-20 2xl:mt-20 block md:flex lg:flex xl:flex 2xl:flex justify-between'>
                        {StepCards.map((stepcards, index) => {
                            return (
                                <div className='w-full md:w-6/12 lg:w-31 xl:w-31 2xl:w-31 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                    <div className='step-card step-card-hover bg-white shadow-normal'>
                                        <div className='flex justify-end'>
                                            <div className='step-image'>
                                                <Image
                                                    className="step-img"
                                                    src={stepcards.src}
                                                    alt={stepcards.title}
                                                    width={stepcards.width}
                                                    height={0}
                                                    priority />
                                            </div>
                                            <div className='step-card-contents'>
                                                <div className='text-justify'>
                                                    <h2 className='text-lg md:text-xl lg:text-26 xl:text-26 2xl:text-26 font-bold text-primary-color Poppins'>{stepcards.step} <span className='text-custom-black'>{stepcards.title}</span></h2>
                                                </div>
                                                <div className="mt-3">
                                                    <p className='text-justify font-medium text-custom-black text-base'>{stepcards.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}