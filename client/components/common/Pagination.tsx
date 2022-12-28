import { useRouter } from "next/router";
import { TDirection } from "../../types";

interface IProps {
  page: number;
  pageCount: number;
  currentPath?: string;
}
const Pagination = ({ page = 1, pageCount, currentPath = "/" }: IProps) => {
  const router = useRouter();

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };
  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const handlePaginate = (direction: TDirection) => {
    if (direction === -1 && isPrevDisabled()) {
      return;
    }
    if (direction === 1 && isNextDisabled()) {
      return;
    }

    router.push({
      pathname: currentPath,
      query: { page: page + direction },
    });
  };

  return (
    <div className="flex justify-center mt-24">
      <button
        onClick={() => handlePaginate(-1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isPrevDisabled() ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ml-4 ${
          isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
