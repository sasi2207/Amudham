import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, image }) {
  const fullTitle = title ? `${title} · Amudham Women Welfare Trust` : "Amudham Women Welfare Trust";
  const desc = description || "Empowering Women, Protecting Nature, Transforming Communities. Based in Melpakkam, Villupuram, Tamil Nadu.";
  const img = image || "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80";
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NGO",
        name: "Amudham Women Welfare Trust",
        url: "https://amudhamtrust.org",
        logo: "https://amudhamtrust.org/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melpakkam, Tindivanam",
          addressRegion: "Villupuram, Tamil Nadu",
          addressCountry: "IN"
        },
        sameAs: []
      })}</script>
    </Helmet>
  );
}
