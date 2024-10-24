"use client";

import style from "./footer.module.scss";
import generic from "../../../../public/data/generic.json";
import { usePathname } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";

function Footer() {
  const pathN = usePathname();
  const t = generic;

  return (
    <footer className={style.footer}>
      <div className={style.footer__first}>
        <ExportedImage
          src="/image/dott-vincenti-logo.png"
          width={180}
          height={38}
          alt="logo"
        />

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
