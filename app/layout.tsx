// import "../styles/global.css";
// import { Metadata } from "next";
// import Navigation from "../components/navigation";

// export const metadata = {
//   title: {
//     template: "%s | Best Seller",
//     default: "Loading...",
//   },
//   description: "The best seller on the best framework",
// };

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navigation />
//         {children}
//       </body>
//     </html>
//   );
// }

import '../styles/global.css';
import Navigation from '../components/navigation';
import { Shadows_Into_Light } from 'next/font/google';

/* ⭐ 사이트 전체에 적용할 손글씨 폰트 */
const handFont = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | Best Seller',
    default: 'Google Best Sellers',
  },
  description: 'The best seller list made with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ⭐ body 전체에 손글씨 폰트 적용 */}
      <body className={handFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
