import assert from "node:assert/strict";
import { createProjectSearch, readProjectSearch } from "../lib/project-search.ts";

assert.deepEqual(readProjectSearch(""), { filter: "전체", query: "" });
assert.deepEqual(readProjectSearch("?filter=Web&q=React"), {
  filter: "Web",
  query: "React",
});
assert.deepEqual(readProjectSearch("?filter=unknown&q=%EA%B2%B0%EC%A0%9C"), {
  filter: "전체",
  query: "결제",
});

const sharedSearch = createProjectSearch("?utm_source=resume", "Web", "인증 & React");
assert.deepEqual(readProjectSearch(sharedSearch), {
  filter: "Web",
  query: "인증 & React",
});
assert.equal(new URLSearchParams(sharedSearch).get("utm_source"), "resume");
assert.equal(createProjectSearch("?filter=Web&q=React", "Web", ""), "filter=Web");
assert.equal(createProjectSearch("?filter=Web&q=React", "전체", "React"), "q=React");
assert.equal(createProjectSearch("?filter=Web&q=React", "전체", ""), "");
assert.equal(
  new URLSearchParams(createProjectSearch("?project=erp-ai", "전체", "")).get("project"),
  "erp-ai",
);

console.log("Verified project search URL defaults, shared conditions, encoding, and clearing.");
