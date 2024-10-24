"use client";

import styles from "./page.module.scss";
import LoaderSite from "@/components/loaders/loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainList from "@/components/lists/mainList";
import { getPostFiltered, getPostDataByPage } from "@/utils/getData";
import { capitalizeFirstLetter } from "@/utils/generic";
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

  useEffect(() => {
    if (!category) {
      getPostDataByPage(5, page, setPost);
    }
  }, [category, page]);

  useEffect(() => {
    setPage(1);
    getPostFiltered(capitalizeFirstLetter(category), 5, page, setPost);
  }, [category]);

  return (
    <main className={styles.main}>
      {post.results ? (
        <MainList
          list={post.results}
          setPostImage={setPostImage}
          categoryByUrlParams={category}
          page={page}
          setPage={setPage}
          totalPages={post.total_pages}
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
  );
}
