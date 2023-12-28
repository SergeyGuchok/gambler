export const createDynamicMetatags = ({
  pageUrl,
  logoUrl,
  title,
  description,
} = {}) => {
  return (
    <>
      <link rel="canonical" href={pageUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="TheGamblr.com" />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:image:alt" content="TheGamblr" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:type" content="image/webp" />

      <meta name="author" content="TheGamblr" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={logoUrl} />
      <meta name="twitter:image:alt" content="TheGamblr" />
      <meta name="twitter:site" content="@thegamblr_com" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="alternate" href={pageUrl} hrefLang="en-us" />
    </>
  );
};
