import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";


export default function AboutUs() {
    const FAQ = [
        {
            question: "Q. 本当に自分で相続税申告書を作れるの？",
            no: "A.",
            answer: "一定の財産のみの方に限られますが、入力フォーマットに従ってご入力をいただければ簡単に相続税申告書をご作成いただけます。ご不安な場合はお電話で税理士に相談(有料)をいただくことも可能です。"
        },
        {
            question: "Q. 本当に自分で遺産分割協議書を作れるの？",
            no: "A.",
            answer: "入力フォーマットに従ってご入力をいただければ作成が可能です。ただし、特定の財産については最後にご自身で文章を加筆していただく必要があるものもございます。"
        },
        {
            question: "Q. 相続税申告書を自分で作成していると税務調査が入りやすくなることはない？",
            no: "A.",
            answer: "相続税申告をした後、税務調査の対象となる確率は平均して約10%となっていますが、小規模宅地等の特例や配偶者の税額軽減等の適用要件を満たし税額がゼロとなる場合、調査対象となる可能性はかなり低いものと想定されます。また、相続税額が発生する場合でも、相続財産5,000万円未満の場合は調査対象となる確率は低くなります。もしも無料de相続をご利用のお客様が税務調査の対象となった場合(税務署からの問い合わせの連絡が入った場合)、「税務調査税理士立ち合いサポート」(有料)のご利用をいただくことも可能です。"
        },
        {
            question: "Q. 全て自分で作成するのは不安なので、税理士に相談はできない？",
            no: "A.",
            answer: "無料de相続で相続税申告書をご作成いただいたお客様には、税理士に直接ご相談(有料)をいただくことも可能です。ご要望に応じてご利用ください。"
        },
    ];
    return (
        <>
            <Header />
            <section>
                <div className="bg-primary-light page-border">
                    <div className="max-w-full py-3 md:py-7 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full flex items-center">
                            <div className="page-heading w-2/4 inline-block float-left">
                                <div className="heading">
                                    <h1 className="text-primary-color font-semibold tracking-2 text-xl md:text-2xl lg:text-28 xl:text-28 2xl:text-28">よくある質問</h1>
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
                <div className='max-w-full mx-auto px-4 lg:px-10 xl:px-10 2xl:px-10 pb-0 lg:pb-20 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                    <div className="text-center pt-8 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 font-extrabold">
                            よくある質問
                        </h5>
                    </div>
                    {FAQ.map((faq, index) => {
                        return (
                            <div className="bg-custom-gray faq-sec rounded-lg mt-6 md:mt-8 lg:mt-12 xl:mt-12 2xl:mt-12">
                                <div className="px-3 lg:px-5 xl:px-5 2xl:px-5 py-4 lg:py-8 xl:py-8 2xl:py-8">
                                    <div className="faq-heading">
                                        <h6 className="text-primary-color text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-semibold tracking-2">{faq.question}</h6>
                                    </div>
                                    <div className="faq-para mt-2 md:mt-3 lg:mt-5 xl:mt-5 2xl:mt-5">
                                        <p className="m-0 font-medium text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-2 leading-7 text-custom-black"><span className="text-custom-green">{faq.no}</span> {faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section >
            <Footer />
        </>
    )
}