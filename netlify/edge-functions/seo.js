export default async (request, context) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const pathname = url.pathname;

  if (!id) return;

  const base = `${url.origin}`;
  let jsonUrl = "";
  let htmlUrl = "";
  let type = "";

  if (pathname.includes("blog-detail")) {
    jsonUrl = `${base}/data/blog-posts.json`;
    htmlUrl = `${base}/blog-detail.html`;
    type = "blog";
  } else if (pathname.includes("portfolio-detail")) {
    jsonUrl = `${base}/data/portfolio-posts.json`;
    htmlUrl = `${base}/portfolio-detail.html`;
    type = "portfolio";
  } else {
    return;
  }

  // Fetch JSON and HTML
  const jsonRes = await fetch(jsonUrl);
  const items = await jsonRes.json();

  const htmlRes = await fetch(htmlUrl);
  const html = await htmlRes.text();

  const item = items.find((i) => i.id === id);
  if (!item) return;

  const title = item.title;
  const description = item.description;
  const image = `${url.origin}/${(item.cover || item.coverImage || item.ogImage || "").replace(/^\/+/, "")}`;

  const injected = html
    .replace(/<title>.*?<\/title>/, `<title>${title} | By Pian Firmansyah</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}">`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${request.url}">`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}">`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}">`);

  return new Response(injected, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};