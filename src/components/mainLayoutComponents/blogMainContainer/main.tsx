"use client";
import { KeyTextField } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import React from "react";
import "./main.scss";

function MainBlog({
  title,
  image,
  urlIcon,
  children,
}: {
  children: React.ReactNode;
  title: KeyTextField;
  image: any;
  urlIcon: string;
}) {
  const style = {
    maxWidth: "1000px",
    width: "100%",
    margin: "0 auto",
    boxShadow: "0px 0px 18px #00000024",
  };
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      {image && (
        <div className={"mainImage"}>
          <PrismicImage
            field={image}
            width={1000}
            height={400}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      )}
      <h1>
        <ExportedImage
          src={urlIcon}
          alt="logo"
          width={88}
          height={95}
          className={"immagineCategoria"}
        />
        {title}
      </h1>
      {children}
    </motion.div>
  );
}

export default MainBlog;
