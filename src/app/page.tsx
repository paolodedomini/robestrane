"use client";
import LoaderSite from "@/components/loaders/loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainList from "@/components/lists/mainList";
import { getPostFiltered, getPostDataByPage } from "@/utils/getData";
import { capitalizeFirstLetter } from "@/utils/generic";
import styles from "./page.module.scss";

import PlaySegmentsOnHover from "@/components/animations/lottie";
/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default function Home({ params }: { params: any }) {
  const searchParams = useSearchParams();
  const categoryByUrlParams = searchParams.get("filter");
  const [post, setPost] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [postImage, setPostImage] = useState<string>("");
  const [category, setCategory] = useState<string | null>(categoryByUrlParams);
  const [animation, setAnimation] = useState<string | null>(null);

  useEffect(() => {
    console.log(category, "category");
    if (!category) {
      getPostDataByPage(5, page, setPost);
    }
  }, [page]);

  useEffect(() => {
    if (category) {
      setPage(1);
      getPostFiltered(capitalizeFirstLetter(category), 5, page, setPost);
    }
  }, [category]);
  console.log(animation, "animation");
  return (
    <>
      <main className={styles.main}>
        {post.results ? (
          <MainList
            list={post.results}
            setPostImage={setPostImage}
            categoryByUrlParams={category}
            page={page}
            setPage={setPage}
            totalPages={post.total_pages}
            setAnimation={setAnimation}
          />
        ) : (
          <LoaderSite />
        )}

        {postImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={postImage}
            width={400}
            height={400}
            className={styles.postImage}
            alt="post image"
          />
        )}
      </main>
      <div className={styles.BackgroundAnimation}>
        {animation && <PlaySegmentsOnHover type={animation} />}
      </div>
    </>
  );
}
