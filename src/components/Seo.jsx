import { Helmet } from "react-helmet-async";
import { profile } from "../data/profile";

export default function Seo({ title, description, path = "/", image }) {
  const pageTitle = title.includes(profile.name) ? title : `${title} · ${profile.name}`;
  const url = `${profile.siteUrl}${path}`;
  const ogImage = image ? `${profile.siteUrl}${image}` : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
