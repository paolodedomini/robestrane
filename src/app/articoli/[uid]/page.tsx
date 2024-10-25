import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import ExportedImage from "next-image-export-optimizer";
import {
  PrismicRichText,
  JSXMapSerializer,
  PrismicImage,
} from "@prismicio/react";
import SocialShare from "@/components/socialShare/socialShare";
import "./page.scss";
import ScrollToId from "@/components/scroll/scrollToId";
import genericData from "../../../../public/data/generic.json";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const categorie = genericData.generics.categorie;

  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  //oggetto per la configurazione del rich text di prismic.io
  const components: JSXMapSerializer = {
    heading1: ({ children }) => <h2>{children}</h2>,
    list: ({ children }) => (
      <ul className={"listaBlog"}>{children.map((child) => child)}</ul>
    ),
    oList: ({ children }) => {
      return <ul className={"listaBlog"}>{children.map((child) => child)}</ul>;
    },
  };

  return (
    <main className={"blogPage"}>
      {page.data.mainimage.url && (
        <div className={"mainImage"}>
          <PrismicImage field={page.data.mainimage} width={1000} height={400} />
        </div>
      )}
      <h1>
        <ExportedImage
          src={`/image/${page.tags[0].toLowerCase()}.svg`}
          alt="logo"
          width={88}
          height={95}
          className={"immagineCategoria"}
        />
        {page.data.title}
      </h1>
      <ScrollToId id="socialShare" />
      {page.data.article && (
        <div className={"contentBlog"}>
          <PrismicRichText field={page.data.article} components={components} />
        </div>
      )}
      {page.data.video.html && (
        <div
          className={"ytEmbed"}
          dangerouslySetInnerHTML={{ __html: page.data.video.html }}
        />
      )}

      {page.data.external_link[0]?.link_title && (
        <div className={"riferimenti"}>
          <h2>Riferimenti</h2>
          <ul>
            {page.data.external_link.map((item, index) => {
              const link: any = item.link;

              return (
                <li key={index}>
                  <a href={link.url} target="_blank">
                    {item.link_title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <h2 className={"shareTitle"}>ShareMe, if you dare...</h2>
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
