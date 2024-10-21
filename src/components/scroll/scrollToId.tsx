"use client";
import React from "react";
import style from "./scroll.module.scss";
import { FiShare2 } from "react-icons/fi";

function ScrollToId({ id }: { id: string }) {
  return (
    <div className={style.wrapperGoto}>
      <a className={style.wrapperGoto__goto} href={`#${id}`}>
        <FiShare2 />
      </a>
    </div>
  );
}

export default ScrollToId;
