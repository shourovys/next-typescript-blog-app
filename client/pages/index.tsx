import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import qs from "qs";
import { getAllArticles, getAllCategoriesApi } from "../api";
import ArticleList from "../components/common/ArticleList";
import Pagination from "../components/common/Pagination";
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
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />
      <Pagination
        page={articles.pagination.page}
        pageCount={articles.pagination.pageCount}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // get categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getAllCategoriesApi();

  //get all articles
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    ...(query.search && {
      filters: {
        title: {
          $containsi: query.search,
        },
      },
    }),
    pagination: {
      page: query.page && !isNaN(+query.page) ? +query.page : 1,
      pageSize: 2,
    },
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
