import styles from "./page.module.scss";

import ExportedImage from "next-image-export-optimizer";
import generic from "../../public/data/generic.json";

/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const mapData = generic.generics;
  const HeroImage =
    "/image/studio-dentistico-dottor-vincenzi-slideshow_overlay-25.jpg";

  return <main className={styles.main}></main>;
}
