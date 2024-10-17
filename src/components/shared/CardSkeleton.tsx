import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ card_number }: CardSkeletonProps) => {
  return Array(card_number)
    .fill(0)
    .map((_, _i) => (
      <div className="px-2 py-3 rounded-lg shadow-md" key={_i}>
        <div className="relative h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton height={10} className="my-2 rounded-md" count={2} />
        </div>
      </div>
    ));
};

export default CardSkeleton;

type CardSkeletonProps = {
  card_number: number;
};
