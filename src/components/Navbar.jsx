"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    function updateCart() {
      try {
        const saved = localStorage.getItem("chaklo-cart");
        const parsed = saved ? JSON.parse(saved) : [];
        setCartItems(Array.isArray(parsed) ? parsed : []);
      } catch {
        setCartItems([]);
      }
    }

    updateCart();

    window.addEventListener("cartUpdated", updateCart);
    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  function saveCart(updatedCart) {
    localStorage.setItem("chaklo-cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function updateQuantity(id, change) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Number(item.quantity) + change }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updatedCart);
  }

  function removeItem(id) {
    saveCart(cartItems.filter((item) => item.id !== id));
  }

  function scrollPageToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function handleHomeClick(event) {
    setMenuOpen(false);
    setCartOpen(false);

    if (pathname === "/") {
      event.preventDefault();
      scrollPageToTop();
    }
  }

  return (
    <>
      <header
        className="navbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          overflow: "visible",
        }}
      >
        <Link
          href="/"
          scroll
          className="navbar-logo"
          onClick={handleHomeClick}
          aria-label="Chaklo Cafe Home"
        >
          <span>Chaklo</span>
          <strong>Cafe</strong>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? String.fromCharCode(215) : String.fromCharCode(9776)}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll
              className={
                pathname === link.href ? "nav-link active" : "nav-link"
              }
              onClick={
                link.href === "/"
                  ? handleHomeClick
                  : () => setMenuOpen(false)
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          {/* CART BUTTON */}
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              aria-expanded={cartOpen}
              style={{
                position: "relative",
                border: "none",
                borderRadius: "8px",
                padding: "11px 14px",
                background: "#f59e0b",
                color: "#111",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              🛒 Cart ({cartCount}) · ₹{cartTotal}
            </button>

            {/* CART DROPDOWN */}
            {cartOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  right: 0,
                  width: "min(370px, calc(100vw - 24px))",
                  maxHeight: "70vh",
                  overflowY: "auto",
                  padding: "20px",
                  background: "#fff",
                  color: "#222",
                  borderRadius: "12px",
                  boxShadow: "0 8px 35px rgba(0,0,0,0.3)",
                  zIndex: 99999,
                  border: "1px solid #eee",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "12px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>Your Cart</h3>

                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    aria-label="Close cart"
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "25px 0" }}>
                    <p>Your cart is empty.</p>

                    <Link
                      href="/menu"
                      onClick={() => setCartOpen(false)}
                      style={{ color: "#b77900", fontWeight: 700 }}
                    >
                      Explore Menu
                    </Link>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          padding: "15px 0",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "10px",
                          }}
                        >
                          <strong>{item.name}</strong>

                          <strong>
                            ₹{Number(item.price) * Number(item.quantity)}
                          </strong>
                        </div>

                        <p
                          style={{
                            color: "#666",
                            fontSize: "13px",
                            margin: "6px 0 12px",
                          }}
                        >
                          ₹{item.price} per item
                        </p>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            style={quantityButtonStyle}
                            aria-label={`Decrease ${item.name}`}
                          >
                            −
                          </button>

                          <span style={{ fontWeight: 700 }}>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            style={quantityButtonStyle}
                            aria-label={`Increase ${item.name}`}
                          >
                            +
                          </button>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            style={{
                              marginLeft: "auto",
                              border: "none",
                              background: "transparent",
                              color: "#dc2626",
                              cursor: "pointer",
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "20px 0",
                        fontSize: "19px",
                        fontWeight: 800,
                      }}
                    >
                      <span>Total</span>
                      <span>₹{cartTotal}</span>
                    </div>

                    <Link
                      href="/cart"
                      onClick={() => setCartOpen(false)}
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "14px",
                        background: "#f59e0b",
                        color: "#111",
                        borderRadius: "8px",
                        fontWeight: 800,
                        textDecoration: "none",
                      }}
                    >
                      Proceed to Checkout →
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          <Link
            href="/menu"
            className="nav-order-btn"
            onClick={() => setMenuOpen(false)}
          >
            ORDER NOW
          </Link>
        </div>
      </header>

      {/* FLOATING CART: SCREEN KE BOTTOM-RIGHT CORNER MEIN */}
      {pathname !== "/contact" && cartCount > 0 && (
        <div
          className="floating-cart-bar"
          style={{
            position: "fixed",
            right: "24px",
            bottom: "24px",
            zIndex: 9998,
            background: "#f59e0b",
            color: "#111",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            maxWidth: "calc(100vw - 32px)",
          }}
        >
          <Link href="/cart" className="floating-cart-summary">
            <div style={{ fontWeight: 800 }}>
              &#128722; {cartCount} {cartCount === 1 ? "item" : "items"}
            </div>
            <div style={{ fontSize: "18px", fontWeight: 800, marginTop: "4px" }}>
              &#8377;{cartTotal}
            </div>
          </Link>

          <Link
            href="/cart"
            className="floating-cart-checkout"
            style={{
              background: "#111",
              color: "#fff",
              padding: "10px 12px",
              borderRadius: "7px",
              textDecoration: "none",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Checkout →
          </Link>
        </div>
      )}
    </>
  );
}

const quantityButtonStyle = {
  width: "30px",
  height: "30px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  background: "#f5f5f5",
  color: "#111",
  fontSize: "18px",
  fontWeight: 700,
  cursor: "pointer",
};
