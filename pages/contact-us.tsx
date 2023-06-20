import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/Forms/contact-us-form";

export default function ContactUs() {
    return (
        <>
            <Header />
            <section>
                <div className="bg-primary-light page-border">
                    <div className="max-w-full py-3 md:py-7 lg:py-10 xl:py-10 2xl:py-10 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                        <div className="w-full flex items-center">
                            <div className="page-heading w-2/4 inline-block float-left">
                                <div className="heading">
                                    <h1 className="text-primary-color font-semibold tracking-2 text-xl md:text-2xl lg:text-28 xl:text-28 2xl:text-28">お問い合わせ</h1>
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
                <div className='max-w-full mx-auto md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md 2xl:max-w-screen-md'>
                    <div className="text-center py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10">
                        <h5 className="heading-underline text-primary-color text-2xl md:text-32 lg:text-32 xl:text-32 2xl:text-32 font-bold">
                            お問い合わせ
                        </h5>
                    </div>
                    <div className="contact-us-form mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">
                        <ContactForm />
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}