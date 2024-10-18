import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import {
  PrismicRichText,
  JSXMapSerializer,
  PrismicImage,
  LinkProps,
} from "@prismicio/react";
import SocialShare from "@/components/socialShare/socialShare";

import style from "./page.module.scss";
import { Url } from "next/dist/shared/lib/router/router";
import { LinkField } from "@prismicio/client";

type Params = { uid: string };
type TExternalLink = {
  link_type: string;
  url: string;
};
export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  //oggetto per la configurazione del rich text di prismic.io
  const components: JSXMapSerializer = {
    heading1: ({ children }) => <h2>{children}</h2>,
    list: ({ children }) => (
      <ul className={style.listaBlog}>{children.map((child) => child)}</ul>
    ),
    oList: ({ children }) => {
      return (
        <ul className={style.listaBlog}>{children.map((child) => child)}</ul>
      );
    },
  };

  return (
    <main className={style.blogPage}>
      {page.data.mainimage.url && (
        <div className={style.mainImage}>
          <PrismicImage field={page.data.mainimage} width={1000} height={400} />
        </div>
      )}
      <h1>{page.data.title}</h1>
      <PrismicRichText field={page.data.article} components={components} />
      {page.data.external_link[0]?.link_title && (
        <div className={style.riferimenti}>
          <h2>Riferimenti</h2>
          <ul>
            {page.data.external_link.map((item, index) => {
              const link: any = item.link;
              console.log(link, "link");
              return (
                <li key={index}>
                  <a
                    id={item.anchorid as string}
                    href={link.url}
                    target="_blank"
                  >
                    {item.link_title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <SocialShare url={params.uid} title={page.data.title as string} />
    </main>
  );
}
//METADATA
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

//PARAMETRI SERVER SIDE
export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
