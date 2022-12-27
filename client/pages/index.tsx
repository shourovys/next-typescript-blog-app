import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import qs from "qs";
import { getAllArticles, getAllCategoriesApi } from "../api";
import ArticleList from "../components/common/ArticleList";
import Tabs from "../components/common/Tabs";
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

export default function Home({ categories, articles }: IHomeProps) {
  return (
    <div>
      <Head>
        <title>Coders blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} handleOnSearch={() => {}} />
      <ArticleList articles={articles.items} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // get categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getAllCategoriesApi();

  //get all articles
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
  };
  const queryString = qs.stringify(options);
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticles>> =
    await getAllArticles(queryString);
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
