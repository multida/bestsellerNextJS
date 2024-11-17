import React from "react";
import { Suspense } from "react";
import BookInfo, { getBook } from "../../../../components/book-info";

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

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookInfo id={id} />
      </Suspense>
    </div>
  );
}
