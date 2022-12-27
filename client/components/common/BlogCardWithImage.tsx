import Image from "next/image";
import Link from "next/link";
import { IArticles } from "../../types";
interface IPropType {
  article: IArticles;
}
const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="flex items-center h-64 p-4 rounded-md md:p-6 bg-gradient-to-r from-violet-500 to-violet-900">
      <Link href="#">
        <span className="text-2xl text-white font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 mr-2 cursor-pointer ">
          {article.attributes.title}
        </span>
      </Link>
      <Image src="/gitbook.svg" alt="" width={140} height={140} />
    </div>
  );
};

export default BlogCardWithImage;
