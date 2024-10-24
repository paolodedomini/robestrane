import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import * as prismic from '@prismicio/client'

// FETCH DEI POST CON PAGINA E NUMERO DI POST
async function getPostDataByPage(pageSize: number, pageNumber: number, setData: React.Dispatch<React.SetStateAction<any>>) {
  const client = createClient();

  try {
    const dataPage = await client.get({
      filters: [prismic.filter.at('document.type', 'post')],
      pageSize: pageSize,
      page: pageNumber,
      orderings: [{ field: 'document.first_publication_date', direction: 'desc' }]
    });
    const data = dataPage;
    if (data) {
      setData(data);
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.log(error);
    notFound();
  }
}
async function getPostFiltered(category: string | null, pageSize: number, pageNumber: number, setData: React.Dispatch<React.SetStateAction<any>>) {
  const client = createClient();
  try {
    const getPostByCategory = await client.get({
      filters: [
        prismic.filter.at('document.type', 'post'),
        prismic.filter.at('document.tags', [category || '']),
      ],
      pageSize: pageSize,
      page: pageNumber,
    });
    if (!getPostByCategory) {
      throw new Error("No category found");
    }
    if (getPostByCategory) {

      setData(getPostByCategory);
    }
  } catch (error) {
    console.log(error);
  }


}

export { getPostDataByPage, getPostFiltered };