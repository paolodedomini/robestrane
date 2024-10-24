import React, { memo, use, useEffect, useState } from "react";
import style from "./mainList.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";
import data from "../../../public/data/generic.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MainList = function MainList({
  list,
  setPostImage,
  categoryByUrlParams,
  page,
  setPage,
  totalPages,
}: {
  list: [];
  setPostImage: React.Dispatch<React.SetStateAction<string>>;
  categoryByUrlParams: string | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) {
  const dataImage = data.generics.categorie;
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();
  const [changePage, setChangePage] = useState<number | string | undefined>(
    page
  );

  useEffect(() => {
    //
    setChangePage((prev) => {
      if (prev !== page) {
        return page;
      } else {
        return categoryByUrlParams || undefined;
      }
    });
  }, [page, categoryByUrlParams]);

  //se cambio categoria resetto la pagina al numero 1
  console.log(list);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.ul
          className={`${style.mainList} `}
          key={changePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
                  onClick={() => {
                    router.push(`/articoli/${item.uid}`);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                    ease: "linear",
                  }}
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
        </motion.ul>{" "}
      </AnimatePresence>
      {totalPages > 1 && (
        <div className={style.mainListNavigation}>
          <button
            onClick={() => {
              setPage((prevPage) => {
                if (prevPage < 2) {
                  return prevPage;
                }
                return prevPage - 1;
              });
            }}
          >
            <FiChevronLeft />
          </button>
          <div className={style.pageNumber}>{page}</div>
          <button
            onClick={() => {
              setPage((prevPage) => {
                if (prevPage < totalPages) {
                  return prevPage + 1;
                }
                return prevPage;
              });
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default MainList;
