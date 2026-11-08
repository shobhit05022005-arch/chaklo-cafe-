import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Chaklo Cafe",
  description: "Terms for browsing the Chaklo Cafe menu and sending an order request.",
};

export default function TermsPage() {
  return (
    <>
      <LegalPage
        eyebrow="PLEASE READ"
        title="Terms & Conditions"
        intro="These terms explain how the menu, cart, and order request on this website work."
        sections={[
          {
            title: "Menu and prices",
            content: (
              <p>
                Menu items, descriptions, prices, and availability are shown for
                reference and may change. The cafe confirms availability and
                the final price when it responds to an order request.
              </p>
            ),
          },
          {
            title: "Cart and order requests",
            content: (
              <p>
                Adding food to the cart does not place an order. Choosing the
                WhatsApp option opens a prepared message for you to review and
                send. An order is not confirmed until the cafe replies and
                confirms the items, price, and pickup or delivery details.
              </p>
            ),
          },
          {
            title: "Payments and delivery",
            content: (
              <p>
                This website does not take online payments or calculate delivery
                charges. Payment method, delivery availability, fees, and timing
                must be agreed directly with the cafe before an order is
                finalized.
              </p>
            ),
          },
          {
            title: "External services",
            content: (
              <p>
                Contact, map, and WhatsApp links open third-party services.
                Their availability and terms are controlled by those providers.
              </p>
            ),
          },
        ]}
      />
      <Footer />
    </>
  );
}
