import Book from "@/components/book";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

export interface IBookList {
  results: {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: "WEEKLY" | "DAILY" | "MONTHLY";
  }[];
}

async function getBooks(): Promise<IBookList> {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const books = await getBooks();
  return (
    <div className={styles.container}>
      {books.results.map((book) => (
        <Book
          key={book.list_name}
          list_name_encoded={book.list_name_encoded}
          list_name={book.list_name}
        />
      ))}
    </div>
  );
}
