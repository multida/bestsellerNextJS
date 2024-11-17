import React from "react";
import { Suspense } from "react";
import BookdInfo, { getBook } from "../../../../components/book-info";

type IParams = Promise<{
  list_name_encoded: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { results } = await getBook(id);
  return {
    title: results.list_name,
  };
}

export default async function MovieDetailPage(props: { params: IParams }) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookdInfo id={id} />
      </Suspense>
    </div>
  );
}
