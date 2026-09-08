const webUrl = process.env.WEB_URL || "https://your-domain.com";

export default function sitemap() {
  return [
    {
      url: webUrl ,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}