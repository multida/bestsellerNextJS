import Image from "next/image";
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
      <ul className={bookInfo.bookList}>
        {results.books.map((book: Book) => {
          return (
            <li key={book.primary_isbn10} className={bookInfo.bookItem}>
              <Image
                src={book.book_image}
                alt={book.title}
                className={bookInfo.poster}
              />
              <div className={bookInfo.bookInfo}>
                <h2 className={bookInfo.bookInfo__title}>{book.title}</h2>
                <p className={bookInfo.bookInfo__author}>{book.author}</p>

                <div>
                  <a
                    href={book.amazon_product_url}
                    target={"_blank"}
                    className={bookInfo.bookInfo__link}
                  >
                    Buy now &rarr;
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
