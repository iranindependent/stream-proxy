export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("Missing url param");
  }

  const response = await fetch(targetUrl, {
    headers: {
      'User-Agent': req.headers['user-agent'],
      'Referer': 'https://sepehrtv.ir',
    },
  });

  const contentType = response.headers.get('content-type');
  if (contentType) res.setHeader('Content-Type', contentType);
  response.body.pipe(res);
}
