import "./globals.css";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Chaklo Cafe",
  description: "Discover delicious food and great vibes at Chaklo Cafe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />

        <Breadcrumbs />

        {children}
      </body>
    </html>
  );
}