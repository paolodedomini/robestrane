"use client";

import styles from "./page.module.scss";
import { createClient } from "@/prismicio";
import ExportedImage from "next-image-export-optimizer";
import generic from "../../public/data/generic.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default function Home({ params }: { params: any }) {
  const mapData = generic.generics;
  const HeroImage =
    "/image/studio-dentistico-dottor-vincenzi-slideshow_overlay-25.jpg";
  const client = createClient();
  const dataPage = client
    .getByType("post", { pageSize: 1, page: 2 })
    .catch(() => notFound());
  const currentPage = useSearchParams().get("page");
  console.log(currentPage, "dataPage");
  return (
    <main className={styles.main}>
      <Link
        href={{
          pathname: "/",
          query: { page: 2 },
        }}
      >
        test
      </Link>
    </main>
  );
}
