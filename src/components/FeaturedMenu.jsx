import Image from "next/image";
import Link from "next/link";

const featuredItems = [
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "Juicy, saucy, and stacked with crisp cafe-style freshness.",
    price: 199,
    category: "Burgers",
    image: "/burger.png",
  },
  {
    id: "loaded-pizza",
    name: "Loaded Pizza",
    description: "Golden crust, melted cheese, and bold toppings in every slice.",
    price: 299,
    category: "Pizza",
    image: "/pizza.png",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    description: "Creamy, chilled, and made for slow cafe conversations.",
    price: 129,
    category: "Beverages",
    image: "/coffe.png",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="featured-section" id="featured-menu">
      <div className="section-heading">
        <span className="section-eyebrow">
          HOUSE FAVOURITES
        </span>

        <h2>
          FRESH PICKS. <span>BOLD BITES.</span>
        </h2>

        <p>
          Start with our most-loved cafe plates, then explore the full menu
          when the craving gets serious.
        </p>
      </div>

      <div className="food-grid">
        {featuredItems.map((item) => (
          <article className="food-card" key={item.id}>
            <div className="food-image">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={400}
                sizes="(max-width: 700px) 90vw, 33vw"
              />

              <span className="food-category">
                {item.category}
              </span>
            </div>

            <div className="food-details">
              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="food-card-bottom">
                <span className="food-price">
                  Rs. {item.price}
                </span>

                <Link
                  href="/menu"
                  className="food-add-btn"
                  aria-label={`Order ${item.name}`}
                >
                  +
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="menu-cta">
        <Link href="/menu" className="outline-btn">
          VIEW FULL MENU
        </Link>
      </div>
    </section>
  );
}
