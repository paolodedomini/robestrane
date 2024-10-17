"use client";

import styles from "./page.module.scss";
import { createClient } from "@/prismicio";
import Link from "next/link";
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

  useEffect(() => {
    if (!categoryByUrlParams) {
      getPostDataByPage(5, page, setPost);
    } else {
      getPostFiltered(
        capitalizeFirstLetter(categoryByUrlParams),
        5,
        1,
        setPost
      );
    }
  }, [categoryByUrlParams]);

  return (
    <main className={styles.main}>
      {post.results ? (
        <MainList
          list={post.results}
          setPostImage={setPostImage}
          categoryByUrlParams={categoryByUrlParams}
        />
      ) : (
        <p>Loading...</p>
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
