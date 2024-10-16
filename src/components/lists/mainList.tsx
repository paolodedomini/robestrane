import React, { memo, useState } from "react";
import style from "./mainList.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";
import data from "../../../public/data/generic.json";

const MainList = memo(function MainList({
  list,
  setPostImage,
}: {
  list: [];
  setPostImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dataImage = data.generics.categorie;
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();
  console.log(list, "list");
  return (
    <motion.ul className={`${style.mainList} `}>
      {list.length && list ? (
        list.map((item: any, index: number) => {
          const imageData = dataImage.find((categoria) => {
            return categoria.nome === item.tags[0];
          });

          return (
            <motion.li
              key={index}
              className={`${active === index ? style.active : ""}`}
              onMouseEnter={() => {
                setPostImage(item.data.mainimage.url);
                setActive(index);
              }}
              onMouseLeave={() => {
                setPostImage("");
                setActive(null);
              }}
              onClick={() => router.push(`/articoli/${item.uid}`)}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExportedImage
                src={"/image/" + imageData?.image}
                alt={imageData?.nome || "immagine di categoria"}
                width={31}
                height={31}
              />

              <span> {item.data.title}</span>
            </motion.li>
          );
        })
      ) : (
        <motion.li> nessun dato da visualizzare</motion.li>
      )}
    </motion.ul>
  );
});

export default MainList;
