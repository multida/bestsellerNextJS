import { API_DETAIL } from "../app/constants";
import bookInfo from "../styles/book-info.module.css";

export interface Book {
  primary_isbn10: string;
  title: string;
  book_image: string;
  author: string;
  amazon_product_url: string;
}

export interface IResults {
  list_name: string;
  books: Book[];
}

export async function getBook(id: string): Promise<{ results: IResults }> {
  const response = await fetch(`${API_DETAIL}${id}`);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const { results } = await getBook(id);
  return (
    <div>
      <h1 className={bookInfo.title}>{results.list_name}</h1>
      <ul>
        {results.books.map((book: Book) => {
          return (
            <li key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <a href={book.amazon_product_url} target={"_blank"}>
                Buy now &rarr;
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
