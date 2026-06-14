import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" />
      <PageHead eyebrow="Legal" title="Privacy Policy" subtitle="How we handle your information." />
      <section className="amu-section overflow-hidden">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>This privacy policy explains how Amudham Women Welfare Trust collects, uses, and protects information shared by visitors, volunteers, and donors. We never sell personal data and use it only for the purposes you consent to (e.g., contacting you, processing your donation, or registering you as a volunteer).</p>
          <h4 className="mt-4">Information we collect</h4>
          <p>Name, email, phone, address and any details you voluntarily provide via our forms.</p>
          <h4 className="mt-4">How we use information</h4>
          <p>To respond to inquiries, send updates, acknowledge donations and coordinate volunteer activities.</p>
          <h4 className="mt-4">Contact</h4>
          <p>For any privacy related questions, write to contact@amudhamtrust.org.</p>
        </div>
      </section>
    </>
  );
}
