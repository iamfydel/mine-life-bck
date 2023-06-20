import React from "react";
import Image from "next/image";

export default function AboutUsCard() {
    const AboutusCard = [
        {
            img: "/about-us/shop-1.png",
            title: "土地の形状が複雑な場合",
            description: "・路線価地域に所在",
            description1: "・旗竿地（敷延）",
            description2: "・袋地など間口が小さく公道に接しているケースなど"
        },
        {
            img: "/about-us/shop-2.png",
            title: "二次相続の検討が有効な場合",
            description: "・近い将来の二次相続が想定される場合には、今回の分割ないようを検討することで、一次相続及び二次相続の合計の税額を低くすることができるケースがあります。"
        },
        {
            img: "/about-us/shop-3.png",
            title: "被相続人が賃貸不動産を所有されていた場合",
            description: "・相続税評価方法が自宅と異なるため 減額効果が見込まれます。"
        },
        {
            img: "/about-us/shop-3.png",
            title: "会社経営を行っていた場合",
            description: "・株式を所有していた場合には、自社株式の評価が必要になります。 評価方法は複雑であり減額用要因は多岐にわたります。"
        }
    ];

    const MobileAboutusCardFirst = [
        {
            img: "/about-us/shop-1.png",
            title: "土地の形状が複雑な場合",
            description: "・路線価地域に所在",
            description1: "・旗竿地（敷延）",
            description2: "・袋地など間口が小さく公道に接しているケースなど"
        },
        {
            img: "/about-us/shop-2.png",
            title: "二次相続の検討が有効な場合",
            description: "・近い将来の二次相続が想定される場合には、今回の分割ないようを検討することで、一次相続及び二次相続の合計の税額を低くすることができるケースがあります。"
        }        
    ];

    const MobileAboutusCardSecond = [        
        {
            img: "/about-us/shop-3.png",
            title: "被相続人が賃貸不動産を所有されていた場合",
            description: "・相続税評価方法が自宅と異なるため 減額効果が見込まれます。"
        },
        {
            img: "/about-us/shop-3.png",
            title: "会社経営を行っていた場合",
            description: "・株式を所有していた場合には、自社株式の評価が必要になります。 評価方法は複雑であり減額用要因は多岐にわたります。"
        }
    ];
    return (
        <><div className="block md:hidden lg:flex xl:flex 2xl:flex gap-6">
            {AboutusCard.map((about, _index) => {
                return (
                    <div className="shop-card mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 rounded-sm shadow-normal px-5 py-3 bg-white w-full md:w-31 lg:w-31 xl:w-312xl:w-31">
                        <div className="shop-image w-full block">
                            <Image
                                className="shop-img"
                                src={about.img}
                                alt={about.title}
                                width={70}
                                height={70}
                                priority />
                        </div>
                        <div className="w-full block">
                            <div className="shop-heading pt-5">
                                <h5 className="text-custom-black text-sm font-medium">{about.title}</h5>
                            </div>
                            <div className="pt-5">
                                <p>{about.description}</p>
                                <p className="py-2">{about.description1}</p>
                                <p>{about.description2}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="hidden md:flex lg:hidden xl:hidden 2xl:hidden gap-6">
                {MobileAboutusCardFirst.map((aboutfirst, _index) => {
                    return (
                        <div className="shop-card mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 rounded-sm shadow-normal px-5 py-3 bg-white w-full md:w-6/12 lg:w-31 xl:w-312xl:w-31">
                            <div className="shop-image w-full block">
                                <Image
                                    className="shop-img"
                                    src={aboutfirst.img}
                                    alt={aboutfirst.title}
                                    width={70}
                                    height={70}
                                    priority />
                            </div>
                            <div className="w-full block">
                                <div className="shop-heading pt-5">
                                    <h5 className="text-custom-black text-sm font-medium">{aboutfirst.title}</h5>
                                </div>
                                <div className="pt-5">
                                    <p>{aboutfirst.description}</p>
                                    <p className="py-2">{aboutfirst.description1}</p>
                                    <p>{aboutfirst.description2}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="hidden md:flex lg:hidden xl:hidden 2xl:hidden gap-6">
                {MobileAboutusCardSecond.map((aboutsecond, _index) => {
                    return (
                        <div className="shop-card mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 rounded-sm shadow-normal px-5 py-3 bg-white w-full md:w-6/12 lg:w-31 xl:w-312xl:w-31">
                            <div className="shop-image w-full block">
                                <Image
                                    className="shop-img"
                                    src={aboutsecond.img}
                                    alt={aboutsecond.title}
                                    width={70}
                                    height={70}
                                    priority />
                            </div>
                            <div className="w-full block">
                                <div className="shop-heading pt-5">
                                    <h5 className="text-custom-black text-sm font-medium">{aboutsecond.title}</h5>
                                </div>
                                <div className="pt-5">
                                    <p>{aboutsecond.description}</p>
                                    <p className="py-2">{aboutsecond.description}</p>                                    
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            </>
    )
}