"use client";

import styles from "./page.module.scss";
import { createClient } from "@/prismicio";
import ExportedImage from "next-image-export-optimizer";
import generic from "../../public/data/generic.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainList from "@/components/lists/mainList";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default function Home({ params }: { params: any }) {
  const [post, setPost] = useState<any>([]);

  const mapData = generic.generics;
  const HeroImage =
    "/image/studio-dentistico-dottor-vincenzi-slideshow_overlay-25.jpg";
  const client = createClient();

  useEffect(() => {
    async function getPostData() {
      try {
        const dataPage = await client.getByType("post", {
          pageSize: 5,
          page: 1,
        });
        const data = dataPage.results;
        if (data) {
          setPost(data);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.log(error);
        notFound();
      }
    }
    getPostData();
  }, []);

  const currentPage = useSearchParams().get("page");
  console.log(post, "dataPage");

  return (
    <main className={styles.main}>
      <AnimatedSection>
        <MainList list={post} />
      </AnimatedSection>
    </main>
  );
}
