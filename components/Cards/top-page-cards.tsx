import React from 'react';
import Image from 'next/image';

const cards = [
    {
        src: "/top/card-1.png",
        alt: "相続財産が少額の方",
        title: "相続財産が少額の方",
        description: "相続財産が少額(相続財産額5,000万円程度)の場合には、一般的に税務リスクが少ないとされているにもかかわらず、税理士に依頼すると高額な報酬がかかってしまいます。",
    },
    {
        src: "/top/card-2.png",
        alt: "配偶者の税額軽減を使って納税額がゼロになる方",
        title: "配偶者の税額軽減を使って納税額がゼロになる方",
        description: "財産の全てを配偶者が取得するケース(相続財産額1億6,000万円以下)では、配偶者の税額軽減により納税額がゼロになります。",
        description1: "※二次相続を考慮すべき場合には配偶者の取得割合を検討した方が良い場合があります。",
    },
    {
        src: "/top/card-3.png",
        alt: "自宅の特例を使って納税額がゼロになる方",
        title: "自宅の特例を使って納税額がゼロになる方",
        description: "お亡くなりになった方が生前住んでいたご自宅について一定の要件を満たしている場合には、その評価額が80％減となる特例の適用が可能です。",
    },
];
export default function TopPageCards() {
    return (
        <div className='block md:flex lg:flex xl:flex 2xl:flex justify-between pb-24'>
            {cards.map((card, index) => {
                return (
                    <div className="top-page-card w-full md:w-32 lg:w-29 xl:w-29 2xl:w-29 mx-0 lg:mx-3 xl:mx-3 2xl:mx-3 mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 bg-white shadow-normal rounded-md pt-0 py-5">
                        <div className="image-card items-center text-justify">
                            <div className="top-card-img-sec">
                                <Image
                                    className="top-card-img w-full"
                                    src={card.src}
                                    alt={card.alt}
                                    width={300}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className="px-4">
                                <div className="heading pt-5">
                                    <h4 className="text-custom-black font-medium tracking-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                                        {card.title}
                                    </h4>
                                </div>
                                <div className="mt-5">
                                    <p className='text-custom-black font-medium tracking-2 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base'>{card.description}</p>
                                </div>
                                <div className="mt-2">
                                    <p className='text-custom-black font-medium tracking-2 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base'>{card.description1}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
