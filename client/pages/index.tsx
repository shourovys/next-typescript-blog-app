import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getAllCategoriesApi } from "../api";
import Tabs from "../components/home/Tabs";
import { ICategory, ICollectionResponse } from "../types";

interface IHomeProps {
  categories: ICategory[];
}

export default function Home({ categories }: IHomeProps) {
  return (
    <div>
      <Head>
        <title>Coders blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories} handleOnSearch={() => {}} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getAllCategoriesApi();

  return {
    props: {
      categories: categories.data,
    },
  };
};
