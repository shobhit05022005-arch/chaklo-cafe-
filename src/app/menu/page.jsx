"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import MenuHero from "@/components/menu/MenuHero";
import MenuCategories from "@/components/menu/MenuCategories";

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Snacks",
  "Beverages",
];

const foodItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "A delicious burger packed with flavour.",
    price: 199,
    category: "Burgers",
    image: "/burger.png",
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "A tasty burger for your cravings.",
    price: 249,
    category: "Burgers",
    image: "/burger.png",
  },
  {
    id: 3,
    name: "Classic Pizza",
    description: "A delicious pizza loaded with flavour.",
    price: 299,
    category: "Pizza",
    image: "/pizza.png",
  },
  {
    id: 4,
    name: "Cold Coffee",
    description: "A chilled and creamy coffee experience.",
    price: 129,
    category: "Beverages",
    image: "/coffe.png",
  },
  {
    id: 5,
    name: "Refreshing Cold Drink",
    description: "A refreshing chilled drink.",
    price: 99,
    category: "Beverages",
    image: "/colddrink.png",
  },
  {
    id: 6,
    name: "Crispy Chicken Burger",
    description: "Crispy chicken, fresh lettuce, and cafe sauce in a toasted bun.",
    price: 229,
    category: "Burgers",
    image: "/burger.png",
  },
  {
    id: 7,
    name: "Veg Cheese Burger",
    description: "A golden veg patty with cheese, lettuce, and creamy sauce.",
    price: 169,
    category: "Burgers",
    image: "/burger.png",
  },
  {
    id: 8,
    name: "Margherita Pizza",
    description: "Classic tomato sauce, mozzarella, and herbs on a crisp base.",
    price: 249,
    category: "Pizza",
    image: "/pizza.png",
  },
  {
    id: 9,
    name: "Paneer Tikka Pizza",
    description: "Paneer, peppers, and a smoky tikka-inspired cafe sauce.",
    price: 329,
    category: "Pizza",
    image: "/pizza.png",
  },
  {
    id: 10,
    name: "Classic French Fries",
    description: "Crispy golden fries, lightly salted and served hot.",
    price: 99,
    category: "Snacks",
    icon: "🍟",
  },
  {
    id: 11,
    name: "Peri Peri Fries",
    description: "Golden fries tossed in a lively peri peri seasoning.",
    price: 129,
    category: "Snacks",
    icon: "🍟",
  },
  {
    id: 12,
    name: "Grilled Cheese Sandwich",
    description: "Toasted bread with melted cheese and crunchy vegetables.",
    price: 149,
    category: "Snacks",
    icon: "🥪",
  },
  {
    id: 13,
    name: "Hot Coffee",
    description: "A warm, smooth coffee for a quick cafe break.",
    price: 89,
    category: "Beverages",
    image: "/coffe.png",
  },
  {
    id: 14,
    name: "Cafe Cappuccino",
    description: "Coffee topped with a soft, creamy milk foam.",
    price: 129,
    category: "Beverages",
    image: "/coffe.png",
  },
  {
    id: 15,
    name: "Iced Latte",
    description: "Chilled espresso and milk served over ice.",
    price: 149,
    category: "Beverages",
    image: "/coffe.png",
  },
  {
    id: 16,
    name: "Mint Lemon Cooler",
    description: "A refreshing lemon and mint cooler, served chilled.",
    price: 119,
    category: "Beverages",
    image: "/colddrink.png",
  },
];

function readCart() {
  try {
    const savedCart = localStorage.getItem("chaklo-cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

// Food Card Component
function MenuCard({
  item,
  cartQuantity,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <article className="food-card">
      {/* Product Image */}
      <div className="food-image">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={400}
            sizes="(max-width: 700px) 90vw, 33vw"
          />
        ) : (
          <div className="food-image-placeholder" aria-hidden="true">
            {item.icon}
          </div>
        )}

        <span className="food-category">{item.category}</span>
      </div>

      {/* Product Details */}
      <div className="food-details">
        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="food-card-bottom">
          {/* Price */}
          <div className="food-price-box">
            <span className="food-price">₹{item.price}</span>

            {cartQuantity > 0 && (
              <span className="food-subtotal">
                Subtotal: ₹{item.price * cartQuantity}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          {cartQuantity === 0 ? (
            <button
              type="button"
              className="food-add-btn food-add-to-cart"
              onClick={() => onAddToCart(item)}
            >
              <span aria-hidden="true">🛒</span>
              <span>Add to Cart</span>
            </button>
          ) : (
            /* Quantity Controls */
            <div className="food-quantity-controls">
              <button
                type="button"
                className="quantity-btn quantity-minus"
                onClick={() => onRemoveFromCart(item)}
                aria-label={`Decrease ${item.name} quantity`}
              >
                −
              </button>

              <span className="quantity-number">
                {cartQuantity}
              </span>

              <button
                type="button"
                className="quantity-btn quantity-plus"
                onClick={() => onAddToCart(item)}
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Load saved cart
  useEffect(() => {
    setCart(readCart());
  }, []);

  // Save cart and update Navbar
  function saveCart(updatedCart) {
    try {
      localStorage.setItem(
        "chaklo-cart",
        JSON.stringify(updatedCart)
      );

      setCart(updatedCart);

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Cart save nahi hua:", error);
    }
  }

  // Add product or increase quantity
  function addToCart(item) {
    const currentCart = readCart();

    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = currentCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: Number(cartItem.quantity || 0) + 1,
            }
          : cartItem
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    saveCart(updatedCart);
  }

  // Decrease quantity or remove product
  function removeFromCart(item) {
    const currentCart = readCart();

    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (!existingItem) return;

    let updatedCart;

    if (Number(existingItem.quantity) > 1) {
      updatedCart = currentCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: Number(cartItem.quantity) - 1,
            }
          : cartItem
      );
    } else {
      updatedCart = currentCart.filter(
        (cartItem) => cartItem.id !== item.id
      );
    }

    saveCart(updatedCart);
  }

  // Filter menu categories
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return foodItems;
    }

    return foodItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      <MenuHero />

      <section className="featured-section" id="food-menu">
        <div className="section-heading">
          <span className="section-eyebrow">
            MADE FOR YOUR CRAVINGS
          </span>

          <h2>
            EXPLORE OUR <span>MENU.</span>
          </h2>

          <p>Find something delicious for every craving.</p>
        </div>

        <MenuCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Food Cards */}
        {filteredItems.length > 0 ? (
          <div className="food-grid">
            {filteredItems.map((item) => {
              const cartItem = cart.find(
                (cartItem) => cartItem.id === item.id
              );

              return (
                <MenuCard
                  key={item.id}
                  item={item}
                  cartQuantity={Number(cartItem?.quantity || 0)}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              );
            })}
          </div>
        ) : (
          <p className="empty-menu">
            No items available in this category yet.
          </p>
        )}
      </section>
    </main>
  );
}
