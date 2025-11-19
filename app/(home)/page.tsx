// import Link from 'next/link';
// import styles from './page.module.css';

// export const metadata = {
//   title: "Home",
// };

// async function getBookLists() {
//   const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
//   return res.json();
// }

// export default async function Home() {
//   const { results } = await getBookLists();

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
//       <div className={styles.grid}>
//         {results.map((list: any) => (
//           <Link
//             href={`/books/${list.list_name_encoded}`}
//             key={list.list_name_encoded}
//             className={styles.card}
//           >
//             <div className={styles.cardContent}>{list.display_name} →</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Home',
};

// 🔥 Google Books 베스트셀러 기반 검색 함수
async function getBooks(keyword: string) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&orderBy=relevance&maxResults=40`;
  const res = await fetch(url);
  return res.json();
}

export default async function Home() {
  // 🔥 데이터 80개 만들기 (두 개의 키워드 조합)
  const data1 = await getBooks('bestseller');
  const data2 = await getBooks('popular books');

  // 두 검색 결과를 합치기
  const books = [...(data1.items ?? []), ...(data2.items ?? [])];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Google Best Sellers</h1>

      <div className={styles.grid}>
        {books.map((item: any) => {
          const info = item.volumeInfo;

          return (
            <Link
              href={`/books/${item.id}`}
              key={item.id}
              className={styles.card}
            >
              <div className={styles.cardContent}>{info.title} →</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
