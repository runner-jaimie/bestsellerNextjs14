// import Image from 'next/image';
// import styles from './page.module.css';

// export const metadata = {
//   title: 'Books',
// };

// async function getBooks(id: string) {
//   const res = await fetch(
//     `https://books-api.nomadcoders.workers.dev/list?name=${id}`
//   );
//   return res.json();
// }

// export default async function BookList({ params }: { params: { id: string } }) {
//   const data = await getBooks(params.id);
//   console.log('DETAIL API:', data);

//   const { results } = await getBooks(params.id);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>{results.display_name}</h1>
//       <div className={styles.bookGrid}>
//         {results.books.map((book: any) => (
//           <div key={book.primary_isbn10} className={styles.bookItem}>
//             <Image
//               src={book.book_image}
//               alt={book.title}
//               width={200}
//               height={300}
//               className={styles.bookCover}
//             />
//             <h2 className={styles.bookTitle}>{book.title}</h2>
//             <p className={styles.bookAuthor}>{book.author}</p>
//             <a
//               href={book.amazon_product_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.buyButton}
//             >
//               Buy now →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//

import Image from 'next/image';
import styles from './page.module.css';

import { Patrick_Hand } from 'next/font/google';

// ⭐ 상세 페이지 전용 폰트 (Patrick Hand)
const patrick = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
});

// Google Books 상세 API
async function getBookDetail(id: string) {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const res = await fetch(url);
  return res.json();
}

export default async function BookDetail({
  params,
}: {
  params: { id: string };
}) {
  const detail = await getBookDetail(params.id);
  const info = detail.volumeInfo;

  if (!info) {
    return <div className={styles.container}>No book found</div>;
  }

  const img =
    info.imageLinks?.thumbnail ||
    info.imageLinks?.smallThumbnail ||
    '/placeholder.png';

  return (
    <div className={`${styles.container} ${patrick.className}`}>
      {/* 제목 */}
      <h1 className={styles.title}>{info.title}</h1>

      {/* 이미지 */}
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          width={260}
          height={350}
          alt={info.title}
          className={styles.bookImage}
        />
      </div>

      {/* 작가 */}
      {info.authors && (
        <p className={styles.author}>by {info.authors.join(', ')}</p>
      )}

      {/* 설명 */}
      {info.description && (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: info.description }}
        />
      )}

      {/* Buy 버튼 */}
      {info.infoLink && (
        <a
          href={info.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          Buy now →
        </a>
      )}
    </div>
  );
}
