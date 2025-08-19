import catApi from "@/services/catApi";
import { atom } from "jotai";
import { atomWithInfiniteQuery } from "jotai-tanstack-query";

export const catPageLimitAtom = atom(20);

export const catsAtom = atomWithInfiniteQuery((get) => {
  const limit = get(catPageLimitAtom);
  return {
    queryKey: ["catsAtom", limit],
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      catApi.getCats({ page: pageParam, limit }),
    getNextPageParam: (_last, _pages, lastPageParams) =>
      (lastPageParams as number) + 1,
  };
});

export const createCatsAtom = (limit: number = 20) =>
  atomWithInfiniteQuery(() => ({
    queryKey: ["catsAtom", limit],
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      catApi.getCats({ page: pageParam, limit }),
    getNextPageParam: (_last, _pages, lastPageParams) => lastPageParams + 1,
  }));
