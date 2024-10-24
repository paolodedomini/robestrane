"use client";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import style from "./nav.module.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import navigation from "../../../../public/data/navigation.json";
import { useLenis } from "lenis/react";
import genericData from "../../../../public/data/generic.json";
import Form from "../../form/netlifyForm";
import { randomNumber } from "@/utils/generic";
function NavBar() {
  const pathN = usePathname();
  const [mobile, setMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [sottotitolo, setSottotitolo] = useState("");
  // funzione per gestire lo scroll con smooth scroll LENIS
  const scroll = useLenis();

  const filters = navigation["filters"];
  const mainNav = navigation["main"];
  function isHome() {
    if (pathN === "/") {
      return true;
    }
    return false;
  }
  function handleScroll() {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    setMobile(false);
  }, [pathN]);

  useEffect(() => {
    setSottotitolo(
      genericData.sottotitoliSito[
        randomNumber(0, genericData.sottotitoliSito.length - 1)
      ]
    );
  }, []);

  const categorie = genericData.generics.categorie;
  const randomTitle = randomNumber(0, genericData.sottotitoliSito.length - 1);
  return (
    <header
      className={`${style.header}  ${scrolling ? style.scrolling : null}`}
    >
      <nav className={`${style.mainNavBar}`}>
        <div className={style.mainNavBar__logo}>
          <Link href="/">
            {!scrolling ? (
              <img src={"/image/logo.svg"} width={88} height={95} alt="logo" />
            ) : (
              <img src={"/image/logo.svg"} width={88} height={95} alt="logo" />
            )}
          </Link>

          <span>&#125;</span>
          <span>{sottotitolo}</span>
        </div>
        <div
          className={`${style.mainNavBar__navBlock} ${style.mainNavBar__inner}`}
        >
          <ul className={style.mainNavBar__navBlock__nav}>
            {filters.map((item, index) => {
              const imageData = categorie.find((categoria) => {
                return categoria.nome.toLocaleLowerCase() === item;
              });

              return (
                <li
                  className={`${pathN.includes(item || "") && style.activeLink}`}
                  key={index}
                >
                  <Link
                    href={{
                      pathname: "/",
                      query: { filter: item },
                    }}
                  >
                    <span>
                      <ExportedImage
                        src={"/image/" + imageData?.image}
                        alt={imageData?.nome || "categoria"}
                        width={21}
                        height={21}
                      />
                    </span>{" "}
                    <div>{item}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${style.burger}`} onClick={() => setMobile(true)}>
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {mobile && (
            <motion.div
              key="mobileMenu"
              className={style.navMobile}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div
                className={style.navMobile__close}
                onClick={() => setMobile(false)}
              >
                <RxCross2 />
              </div>
              <a href="/">
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className={style.navMobile__logo}
                    src={"/image/logo.svg"}
                    width={88}
                    height={95}
                    alt="logo"
                  />
                }
              </a>

              {/*   <ul className={style.navMobile__nav}>
                {mainNav.map((item, index) => (
                  <li
                    className={`${
                      pathN.includes(item.url || "") && style.activeLink
                    }`}
                    key={index}
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        scroll?.scrollTo(item.url || "", { offset: -100 });
                        setMobile(false);
                      }}
                      href={item.url || ""}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul> */}
              <h2>Chi siamo?</h2>
              <p>
                Siamo quelli che hanno idee strane su cose strane, le scriviamo
                qui
              </p>
              <hr style={{ width: "50%" }} />

              <div className={style.navMobile__generic}>
                <p>Se hai da dirci qualcosa questo è il posto giusto</p>
                <Form />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default NavBar;
