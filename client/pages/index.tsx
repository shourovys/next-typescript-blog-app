import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getAllArticles, getAllCategoriesApi } from "../api";
import Tabs from "../components/home/Tabs";
import {
  IArticles,
  ICategory,
  ICollectionResponse,
  IPagination,
} from "../types";

interface IHomeProps {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticles[];
    pagination: IPagination;
  };
}

export default function Home({ categories }: IHomeProps) {
  return (
    <div>
      <Head>
        <title>Coders blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} handleOnSearch={() => {}} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // get categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getAllCategoriesApi();

  //get all articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticles>> =
    await getAllArticles();
  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
