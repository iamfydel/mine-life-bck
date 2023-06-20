import React, { useState } from "react";
import Button from "./button";
import menuItems from "./menu-items";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
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
      <div className="menu-icon" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={active ? "fas fa-times bi bi-list" : "fas fa-bars"}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.url} className='text-sm font-medium'>
                {item.navlink}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex">
        <li className="mr-3">
          <button className='text-white font-medium font-sm btn btn-gradient btn-medium'><Link href={"/contact-us"}>お問い合わせ</Link></button>
        </li>
        <li>
          <button className='text-white font-medium font-sm btn btn-gradient btn-medium'><Link href={"/contact-us"}>ログイン</Link></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
