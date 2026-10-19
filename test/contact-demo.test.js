import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

test("contact UI remains an explicit local-only demo with accessible labels and errors", async () => {
  const source = await readFile(new URL("src/components/ContactForm.jsx", root), "utf8");
  assert.match(source, /does not send or retain messages/i);
  assert.match(source, /was not sent or stored/i);
  assert.doesNotMatch(source, /console\.log|reset\(/);
  for (const id of ["contact-name", "contact-email", "contact-message"]) {
    assert.match(source, new RegExp(`htmlFor="${id}"`));
    assert.match(source, new RegExp(`id="${id}"`));
  }
  assert.match(source, /role="status"/);
});

test("decorative animation is disabled when reduced motion is requested", async () => {
  const source = await readFile(new URL("src/index.css", root), "utf8");
  assert.match(source, /prefers-reduced-motion:\s*reduce/);
  assert.match(source, /\.levitate\s*\{\s*animation:\s*none;/);
});
