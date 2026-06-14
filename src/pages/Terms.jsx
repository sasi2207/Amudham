import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" />
      <PageHead eyebrow="Legal" title="Terms & Conditions" subtitle="Please read these terms carefully." />
      <section className="amu-section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>By accessing this website, you agree to comply with these terms. Content on this site is for information about Amudham Women Welfare Trust and may not be reproduced without permission.</p>
          <h4 className="mt-4">Donations</h4>
          <p>All donations are voluntary, non-refundable and used towards programs in accordance with the trust's mission.</p>
          <h4 className="mt-4">Liability</h4>
          <p>While we strive for accuracy, we are not liable for any indirect or consequential damages arising from website use.</p>
        </div>
      </section>
    </>
  );
}
