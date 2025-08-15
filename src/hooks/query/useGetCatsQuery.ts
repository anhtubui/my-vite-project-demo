import catApi from "@/services/catApi";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetCats = ({
  limit = 20,
}: {
  limit?: number;
} = {}) =>
  useInfiniteQuery({
    queryKey: ["useGetCats"],
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      catApi.getCats({ page: pageParam, limit }),
    getNextPageParam: (_last, _pages) => _pages.length,
  });
