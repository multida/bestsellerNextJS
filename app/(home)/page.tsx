import Book from "@/components/book";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

interface IBookType {
  id: string;
  book: string;
  list_name: string;
}

async function getBooks() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage(): Promise<{ props: IBookType }> {
  const books = await getBooks();
  return (
    <div className={styles.container}>
      {books.results.map((book, id) => (
        <Book key={book.id} id={book.id} list_name={book.list_name} />
      ))}
    </div>
  );
}
