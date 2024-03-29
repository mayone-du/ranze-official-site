import Link from "next/link";
import { memo } from "react";
import { Logo } from "./Logo";
// import { useState } from "react";
// import { CustomButton } from "../CustomColorButton";
// import { Menu, Close } from "@material-ui/icons";
// import { Button } from "@material-ui/core";

const Header: React.VFC<{ isActivePage: string }> = memo(({ isActivePage }) => {
  // const [isMenuActive, setIsMenuActive] = useState(false);

  // const handleToggleClick = () => {
  //   setIsMenuActive(!isMenuActive);
  // };

  return (
    <>
      <Logo />
      <header className="mx-10 md:mb-8 mb-4">
        <nav>
          <ul className="flex items-center justify-center">
            <li>
              <Link href="/">
                <a
                  className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                    isActivePage === "Home" ? "border-b-2 border-black" : ""
                  }`}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                    isActivePage === "About" ? "border-b-2 border-black" : ""
                  }`}
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a
                  className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                    isActivePage === "Service" ? "border-b-2 border-black" : ""
                  }`}
                >
                  SERVICE
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a
                  className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                    isActivePage === "Works" ? "border-b-2 border-black" : ""
                  }`}
                >
                  WORKS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                    isActivePage === "Contact" ? "border-b-2 border-black" : ""
                  }`}
                >
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
Header.displayName = "Header";

export { Header };
