import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const FooterMenu = [
    {
      title: "運営会社",
      navlink: "運営会社",
      url: "#"
    },
    {
      title: "プライバシーポリシー",
      navlink: "プライバシーポリシー",
      url: "#"
    },
    {
      title: "情報セキュリティ基本方針",
      navlink: "情報セキュリティ基本方針",
      url: "#"
    }
  ]
  return (
    <footer className="pt-10 relative top-8">
      <div className="footer-sec-1 bg-no-repeat bg-center bg-cover bg-[url('/bg/footer-bg.png')]">
        <div className="max-w-full mx-auto pb-20">
          <div className="inline-block md:flex lg:flex xl:flex 2xl:flex">
            <div className="w-full pl-5 lg:pl-150 xl:pl-150 2xl:pl-150 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12">
              <div className="footer-sec-contents">
                <div className="footer-heading">
                  <h1 className="text-2xl md:text-3xl lg:text-32 xl:text-32 2xl:text-32 text-custom-black tracking-2 font-bold">税理士相談サポート</h1>
                </div>
                <div className="paragraph mt-5">
                  <p className="text-base font-medium text-custom-black">以下のような場合に税理士に直接相談が可能です。(有料))</p>
                  <ul className="mt-2 list-inside leading-7">
                    <li className="text-base font-medium tracking-2 text-custom-black">・税理士相談サポート(１時間3万円)作成した申告書の内容に不安がある場合や、特例の適用や相続財産の過不足に関し質問したいことがある場合に税理士が相談対応いたします。</li>
                    <li className="text-base font-medium tracking-2 text-custom-black">・税理士による申告書定格診断(一律3万円)作成した申告書の内容について税理士が適格診断を行い、「大きな誤りがないか」、「大きな節税要因の漏れがないか」のチェックをしてご報告いたします。</li>
                  </ul>
                </div>
                <div className="footer-btn mt-10">
                  <button className='text-white font-medium font-sm btn rounded-3xl btn-gradient btn-medium'><Link href={"/contact-us"}>税理士に相談</Link></button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
              <div className="footer-image float-right">
                <Image
                  className="footer-img"
                  src="/footer.png"
                  alt="mine-life"
                  width={330}
                  height={0}
                  priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-header hidden lg:block xl:block 2xl:block">
        <div className="footer-sec-2 py-5">
          <nav className="navbar">
            <Link href="/" className="navbar-logo">
              <Image
                className="logo"
                src="/logo/logo-1.svg"
                alt="mine-life"
                width={180}
                height={35}
                priority
              />
            </Link>
            <ul className="footer-nav nav-menu">
              <li>
                <div className='flex text-sm font-medium'>
                  <Image
                    className="logo mr-2"
                    src="/footer-c-logo.png"
                    alt="mine-life"
                    width={20}
                    height={20}
                    priority
                  />
                  <span className="Poppins">Copyright Mine life. All right reserved</span>
                </div>
              </li>
              {FooterMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url} className='flex text-sm font-medium'>
                      <span>{item.navlink}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mobile-footer block lg:hidden xl:hidden 2xl:hidden">
        <div className="footer-sec-2 py-5">
          <div className="footer-logo-sec py-5 pl-3">
            <Link href="/" className="footer-logo">
              <Image
                className="logo"
                src="/logo/logo-1.svg"
                alt="mine-life"
                width={180}
                height={35}
                priority
              />
            </Link>
          </div>
          <nav className="mb-5">
            <ul className="footer-nav pl-3">
              {FooterMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url} className='flex text-sm leading-7 tracking-2 font-medium'>
                      <span>{item.navlink}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="bg-primary-light py-2 w-full block text-center">
          <span className="Poppins text-sm">
            © Copyright Mine life. All right reserved</span>
        </div>
      </div>
    </footer>
  )
}
