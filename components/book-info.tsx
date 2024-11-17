import { API_DETAIL } from "../app/constants";
import bookInfo from "../styles/book-info.module.css";

export async function getBook(id: string) {
  const response = await fetch(API_DETAIL);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const results = await getBook(id);
  return (
    <div>
      <h1 className={bookInfo.title}>{results.list_name}</h1>
      {/* <ul>
        {results.books.map((book: Book) => {
          return (
            <li key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <a
                href={book.amazon_product_url}
                target={"_blank"}
              >
                Buy now &rarr;
              </a>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
