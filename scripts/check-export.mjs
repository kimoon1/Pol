import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const output = path.resolve("out");
const files = fs
  .readdirSync(output, { recursive: true })
  .filter((file) => file.endsWith(".html"));
const resolveRoute = (route) =>
  path.join(output, route.endsWith("/") ? `${route}index.html` : route);
let checkedLinks = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(output, file), "utf8");
  const currentRoute =
    "/" + file.replaceAll("\\", "/").replace(/index\.html$/, "");
  for (const [, href] of html.matchAll(/href="([/#][^"\s]*)"/g)) {
    const url = new URL(
      href.replaceAll("&amp;", "&"),
      `https://portfolio.invalid${currentRoute}`,
    );
    if (url.origin !== "https://portfolio.invalid") continue;
    const target = resolveRoute(decodeURIComponent(url.pathname));
    assert.ok(
      fs.existsSync(target),
      `${file}: missing internal destination ${href}`,
    );
    if (url.hash && target.endsWith(".html")) {
      const destination = fs.readFileSync(target, "utf8");
      assert.ok(
        destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `${file}: missing anchor ${href}`,
      );
    }
    checkedLinks++;
  }
}
const details = files.filter((file) =>
  /^projects[\\/][^\\/]+[\\/]index\.html$/.test(file),
);
assert.ok(details.length >= 10, "Every project must have a static detail page");
const titles = new Set();
for (const file of details) {
  const html = fs.readFileSync(path.join(output, file), "utf8");
  assert.equal(
    [...html.matchAll(/<h1(?:\s|>)/g)].length,
    1,
    `${file}: expected one page heading`,
  );
  assert.ok(
    html.includes('property="og:description"'),
    `${file}: missing share description`,
  );
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(
    title && !titles.has(title),
    `${file}: missing or duplicate page title`,
  );
  titles.add(title);
}
assert.ok(
  fs
    .readFileSync(resolveRoute("/projects/erp-ai/"), "utf8")
    .includes("벡터 검색 미사용"),
);
assert.ok(
  fs
    .readFileSync(resolveRoute("/projects/ai-ad-generator/"), "utf8")
    .includes("진행 중"),
);
assert.ok(
  fs.existsSync(resolveRoute("/resume/")),
  "Printable career summary must be exported",
);
console.log(
  `Verified ${details.length} project pages, unique metadata, and ${checkedLinks} internal links across ${files.length} HTML files.`,
);
