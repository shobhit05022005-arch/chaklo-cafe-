import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Chaklo Cafe",
  description: "How the Chaklo Cafe website currently handles cart and contact links.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPage
        eyebrow="YOUR PRIVACY"
        title="Privacy Policy"
        intro="This notice explains what the Chaklo Cafe website stores and what happens when you use its contact and order links."
        sections={[
          {
            title: "Your cart",
            content: (
              <p>
                The menu and cart save item names, prices, and quantities in
                local storage in your browser under “chaklo-cart”. This lets the
                cart remain available on this device without an account. The
                website does not send your cart to the cafe automatically.
              </p>
            ),
          },
          {
            title: "WhatsApp orders and direct contact",
            content: (
              <p>
                If you choose to order through WhatsApp, the site opens WhatsApp
                with a prepared message containing your cart. The cafe does not
                receive it unless you send it. WhatsApp processes the link and
                any message you send under its own privacy terms. Phone links
                open your calling app.
              </p>
            ),
          },
          {
            title: "External services",
            content: (
              <p>
                The site requests fonts from Google Fonts. Map links open Google
                Maps when selected. Those services may receive information from
                your browser when you use them and are governed by their own
                privacy notices.
              </p>
            ),
          },
          {
            title: "Managing your information",
            content: (
              <p>
                You can remove items or clear the cart on the cart page, or
                clear this site’s local storage through your browser settings.
                This notice describes the website’s current features and will
                need an update if accounts, analytics, payment, or a server-side
                ordering system are added.
              </p>
            ),
          },
        ]}
      />
      <Footer />
    </>
  );
}
