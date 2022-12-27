import Image from "next/image";
import Link from "next/link";
import { IArticles } from "../../types";
import { formatDate } from "../../utils/formatData";
interface IPropType {
  article: IArticles;
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className="text-xl font-bold text-gray-600 hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.title}
        </h1>
      </Link>
      <div className="flex items-center my-4 space-x-2">
        {article.attributes.author.data.attributes.formats?.thumbnail?.url && (
          <div className="flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={`http://localhost:1337/${article.attributes.author.data.attributes.formats?.thumbnail?.url}`}
              alt=""
              height={40}
              width={40}
            />
          </div>
        )}
        <span className="text-sm font-bold text-gray-600">
          {article.attributes.author.data.attributes.firstName}{" "}
          {article.attributes.author.data.attributes.lastName} on &nbsp;
          <span className="text-gray-400">
            {formatDate(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}{" "}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div>
    </div>
  );
};

export default BlogCard;
