"use client";

import Link from "next/link";
import styles from "../styles/home.module.css";

interface IBookProps {
  list_name_encoded: string;
  list_name: string;
}

export default function Book({ list_name_encoded, list_name }: IBookProps) {
  return (
    <>
      <div key={list_name_encoded} className={styles.bookTitle}>
        <Link href={`/books/${list_name_encoded}`}>{list_name} &rarr;</Link>
        {/* 
        <Link prefetch href={`/lists/${list_name_encoded}`}>
          {list_name} &rarr;
        </Link> */}
      </div>
    </>
  );
}
