import Image from "next/image";

export default function MenuGrid({ items }) {
  return (
    <div className="food-grid">
      {items.map((item) => (
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
                ₹{item.price}
              </span>

              <button
                type="button"
                className="food-add-btn"
                aria-label={`Select ${item.name}`}
                onClick={() =>
                  alert(`${item.name} selected. Online ordering coming soon!`)
                }
              >
                +
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}