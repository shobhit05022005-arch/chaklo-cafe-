"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cafeInfo } from "@/lib/cafe-info";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    function loadCart() {
      try {
        const savedCart = localStorage.getItem("chaklo-cart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        setCart(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (error) {
        console.error("Cart load nahi hua:", error);
        setCart([]);
      }
    }

    loadCart();
    setMounted(true);

    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // Save cart and update Navbar/Menu
  function saveCart(updatedCart) {
    localStorage.setItem("chaklo-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // Increase or decrease quantity
  function updateQuantity(id, change) {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Number(item.quantity || 0) + change,
            }
          : item
      )
      .filter((item) => Number(item.quantity) > 0);

    saveCart(updatedCart);
  }

  // Remove item completely
  function removeItem(id) {
    saveCart(cart.filter((item) => item.id !== id));
  }

  // Clear entire cart
  function clearCart() {
    saveCart([]);
  }

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const orderMessage = [
    "Hi Chaklo Cafe, I would like to place this order:",
    ...cart.map(
      (item) =>
        `${item.name} x ${item.quantity} — ₹${(
          Number(item.price || 0) * Number(item.quantity || 0)
        ).toLocaleString("en-IN")}`
    ),
    `Subtotal: ₹${subtotal.toLocaleString("en-IN")}`,
    "Please confirm availability and delivery or pickup details.",
  ].join("\n");
  const whatsappOrderUrl = `https://wa.me/${cafeInfo.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <main className="cart-page">
        <div className="cart-container">
          <p>Loading your cart...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        {/* Page Heading */}
        <div className="cart-heading">
          <span className="cart-eyebrow">YOUR CHAKLO CAFE ORDER</span>

          <h1>
            Your <span>Cart</span>
          </h1>

          <p>Review your favourite food before placing your order.</p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <section className="empty-cart-box">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty!</h2>

            <p>
              Looks like you haven&apos;t added anything delicious yet.
            </p>

            <Link href="/menu" className="cart-primary-btn">
              Explore Our Menu →
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            {/* Cart Items */}
            <section className="cart-items-section">
              <div className="cart-section-header">
                <h2>Cart Items</h2>
                <span>{totalItems} items</span>
              </div>

              <div className="cart-items-list">
                {cart.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <div className="cart-item-image">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <span aria-hidden="true">{item.icon || "🍔"}</span>
                      )}
                    </div>

                    <div className="cart-item-details">
                      <h3>{item.name}</h3>

                      <p className="cart-item-category">
                        {item.category || "Chaklo Cafe Special"}
                      </p>

                      <p className="cart-item-price">
                        ₹{Number(item.price || 0)} per item
                      </p>

                      <div className="cart-item-actions">
                        <div className="cart-quantity-control">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total">
                      ₹
                      {(
                        Number(item.price || 0) *
                        Number(item.quantity || 0)
                      ).toLocaleString("en-IN")}
                    </div>
                  </article>
                ))}
              </div>

              <div className="cart-bottom-actions">
                <Link href="/menu" className="cart-continue-btn">
                  ← Continue Shopping
                </Link>

                <button
                  type="button"
                  className="cart-clear-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Charges</span>
                <span className="delivery-note">To be confirmed</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Estimated Total</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <p className="summary-disclaimer">
                Delivery charges, if applicable, will be confirmed before
                your order is finalized.
              </p>

              <a
                href="#place-order"
                className="cart-checkout-btn"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("place-order")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Continue to Order ↓
              </a>

              <div className="cart-secure-note">
                <span>✓</span>
                Online payment is not required at this stage.
              </div>
            </aside>
          </div>
        )}

        {/* Order Information */}
        {cart.length > 0 && (
          <section className="cart-order-info" id="place-order">
            <h2>Ready to place your order?</h2>

            <p>
              Send your item list to the cafe on WhatsApp. The cafe will confirm
              availability, delivery or pickup, and the final amount.
            </p>

            <div className="cart-order-buttons">
              <Link href="/menu" className="cart-primary-btn">
                Add More Items
              </Link>

              <a
                href={whatsappOrderUrl}
                className="cart-contact-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Order on WhatsApp
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
