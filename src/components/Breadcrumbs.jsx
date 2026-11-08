"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbNames = {
  menu: "Menu",
  about: "About Us",
  contact: "Contact Us",
  gallery: "Gallery",
  cart: "Cart",
  checkout: "Checkout",
  products: "Products",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  let currentPath = "";

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-wrapper">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link href="/" scroll className="breadcrumb-link">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          currentPath += `/${segment}`;

          const label =
            breadcrumbNames[segment] ||
            decodeURIComponent(segment)
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

          const isLast = index === segments.length - 1;

          return (
            <li key={currentPath} className="breadcrumb-item">
              <span className="breadcrumb-separator">/</span>

              {isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={currentPath} className="breadcrumb-link">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}