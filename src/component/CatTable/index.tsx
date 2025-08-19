import { catsAtom } from "@/atom/catAtoms";
import Image from "@/component/ui/Image";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { Button } from "my-component-library-1204";
import styles from "./CatTable.module.css";

const CatTableStyled = styled.div``;

// Skeleton row component
const SkeletonRow = () => (
  <tr className={styles.tr}>
    <td className={styles.td}>
      <div className="skeleton skeleton-image"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-medium"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-short"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-long"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-short"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-short"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-short"></div>
    </td>
    <td className={styles.td}>
      <div className="skeleton skeleton-text-short"></div>
    </td>
  </tr>
);

export default function CatTable() {
  const [{ data, fetchNextPage, isLoading, isFetchingNextPage }] =
    useAtom(catsAtom);
  const cats = data?.pages.flatMap((page) => page) ?? [];

  // Show skeleton rows when loading initial data
  const showSkeletons = isLoading;
  const skeletonRows = Array.from({ length: 5 }, (_, index) => (
    <SkeletonRow key={`skeleton-${index}`} />
  ));

  return (
    <CatTableStyled className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Image</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Origin</th>
              <th className={styles.th}>Breeds</th>
              <th className={styles.th}>Weight</th>
              <th className={styles.th}>Life Span</th>
              <th className={styles.th}>Width</th>
              <th className={styles.th}>Height</th>
            </tr>
          </thead>
          <tbody>
            {showSkeletons
              ? skeletonRows
              : cats.map((cat) => (
                  <tr
                    key={cat.id}
                    className={styles.tr}
                  >
                    <td className={styles.td}>
                      <Image
                        src={cat.url}
                        alt={cat.breeds[0].name}
                        width={64}
                        height={64}
                        fallbackText="No Cat Image"
                      />
                    </td>
                    <td className={styles.td}>{cat.breeds[0].name}</td>
                    <td className={styles.td}>{cat.breeds[0].origin}</td>
                    <td className={styles.td}>
                      {cat.breeds.map((breed) => breed.name).join(", ")}
                    </td>
                    <td className={styles.td}>
                      {cat.breeds[0].weight.metric} kg
                    </td>
                    <td className={styles.td}>{cat.breeds[0].life_span}</td>
                    <td className={styles.td}>{cat.width}</td>
                    <td className={styles.td}>{cat.height}</td>
                  </tr>
                ))}
            {/* Show skeleton rows when fetching next page */}
            {isFetchingNextPage && skeletonRows}
          </tbody>
        </table>
      </div>
      <Button
        className="w-fit shadow-md!"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        variant="outline"
      >
        {isFetchingNextPage ? "Loading..." : "Next"}
      </Button>
    </CatTableStyled>
  );
}
