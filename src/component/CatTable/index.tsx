import { useGetCats } from "@/hooks/query/useGetCatsQuery";
import styled from "@emotion/styled";

const CatTableStyled = styled.div``;

export default function CatTable() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useGetCats({
    limit: 20,
  });
  const cats = data?.pages.flatMap((page) => page) ?? [];
  return (
    <CatTableStyled className="w-full flex flex-col gap-4">
      <div className="relative w-full overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-100 [&_tr]:border-b [&_tr]:border-gray-200">
            <tr className="">
              <th>Name</th>
              <th>Origin</th>
              <th>Breeds</th>
              <th>Weight</th>
              <th>Life Span</th>
              <th>Width</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.breeds[0].name}</td>
                <td>{cat.breeds[0].origin}</td>
                <td>{cat.breeds.map((breed) => breed.name).join(", ")}</td>
                <td>{cat.breeds[0].weight.metric} kg</td>
                <td>{cat.breeds[0].life_span}</td>
                <td>{cat.width}</td>
                <td>{cat.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => fetchNextPage()}>Next</button>
    </CatTableStyled>
  );
}
