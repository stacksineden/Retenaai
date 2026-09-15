/**
 * GET /api/geo → { "country": "NG" }
 *
 * The site is static, so the browser can't see the visitor's country. Vercel
 * attaches it to every request that reaches a function as the
 * `x-vercel-ip-country` header; this just hands it back. Used only to pick the
 * currency (Nigeria → NGN, everywhere else → USD). Nothing is logged or stored.
 *
 * Only exists once deployed to Vercel. Locally the site always shows USD.
 */
export function GET(request) {
  const country = request.headers.get("x-vercel-ip-country");
  return new Response(JSON.stringify({ country: country || null }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}
