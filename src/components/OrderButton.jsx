import Link from "next/link";

export default function OrderButton({
  children = "ORDER NOW",
  href = "/menu",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`order-btn ${className}`}
    >
      {children}
    </Link>
  );
}