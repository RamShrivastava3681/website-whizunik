import { chromium } from "@playwright/test";

const base = "http://localhost:8080";
const errors = [];
const browser = await chromium.launch({ channel: "chrome" });

const attach = (page) => {
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
};

/* ---------------- Desktop ---------------- */
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
attach(page);
await page.goto(base, { waitUntil: "networkidle" });
await page.waitForTimeout(900);

const info = await page.evaluate(() => {
  const section = document.querySelector("#platform");
  return {
    hasPlatform: Boolean(section),
    scenes: document.querySelectorAll("#platform [data-scene]").length,
    title: document.querySelector("#platform-title")?.textContent?.replace(/\s+/g, " ").trim(),
    docHeight: document.documentElement.scrollHeight,
    viewport: window.innerHeight,
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  };
});
console.log("DESKTOP INFO", JSON.stringify(info));

const platformTop = await page.evaluate(() => {
  const section = document.querySelector("#platform");
  return section.getBoundingClientRect().top + window.scrollY;
});

const samples = [];
for (let step = 0; step < 9; step += 1) {
  const y = platformTop + step * 900 * 0.95;
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(700);
  const state = await page.evaluate(() => {
    const rail = document.querySelector("#platform .pointer-events-none.absolute.inset-x-0.bottom-5");
    const stage = document.querySelector("#platform > div");
    const pinned = stage ? Math.round(stage.getBoundingClientRect().top) : null;
    return {
      rail: rail?.textContent?.replace(/\s+/g, " ").trim().slice(0, 40),
      pinned,
      scrollY: Math.round(window.scrollY),
    };
  });
  samples.push({ step, ...state });
  if ([0, 1, 3, 4, 5, 8].includes(step)) {
    await page.screenshot({ path: `C:/tmp/platform-d${step}.png` });
  }
}
console.log("DESKTOP SAMPLES", JSON.stringify(samples, null, 1));

/* resize */
await page.setViewportSize({ width: 1180, height: 820 });
await page.waitForTimeout(600);
await page.setViewportSize({ width: 1440, height: 900 });
await page.waitForTimeout(600);
const afterResize = await page.evaluate(() => ({
  overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  hasPlatform: Boolean(document.querySelector("#platform")),
}));
console.log("AFTER RESIZE", JSON.stringify(afterResize));

/* route away and back */
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await page.click('header a[href="/command"]');
await page.waitForTimeout(700);
const commandTitle = await page.title();
await page.goBack();
await page.waitForTimeout(1200);
const back = await page.evaluate(() => ({
  scenes: document.querySelectorAll("#platform [data-scene]").length,
  title: document.title,
  spacer: Boolean(document.querySelector("#platform .pin-spacer")),
}));
console.log("ROUTE", JSON.stringify({ commandTitle, back }));

/* ---------------- Tablet ---------------- */
const tablet = await browser.newPage({ viewport: { width: 768, height: 1024 } });
attach(tablet);
await tablet.goto(base, { waitUntil: "networkidle" });
await tablet.waitForTimeout(700);
const tabletInfo = await tablet.evaluate(() => ({
  scenes: document.querySelectorAll("#platform [data-scene]").length,
  overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
}));
console.log("TABLET", JSON.stringify(tabletInfo));
await tablet.screenshot({ path: "C:/tmp/platform-tablet.png", fullPage: false });

/* ---------------- Mobile ---------------- */
const mobile = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
attach(mobile);
await mobile.goto(base, { waitUntil: "networkidle" });
await mobile.waitForTimeout(700);
const mobileInfo = await mobile.evaluate(() => ({
  scenes: document.querySelectorAll("#platform [data-scene]").length,
  overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  docWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("MOBILE", JSON.stringify(mobileInfo));
const mobileSection = await mobile.evaluate(() => {
  const section = document.querySelector("#platform");
  return section.getBoundingClientRect().top + window.scrollY;
});
await mobile.evaluate((y) => window.scrollTo(0, y), mobileSection);
await mobile.waitForTimeout(600);
await mobile.screenshot({ path: "C:/tmp/platform-mobile.png" });

/* ---------------- Reduced motion ---------------- */
const reduced = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
attach(reduced);
await reduced.goto(base, { waitUntil: "networkidle" });
await reduced.waitForTimeout(700);
const reducedInfo = await reduced.evaluate(() => ({
  scenes: document.querySelectorAll("#platform [data-scene]").length,
  overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
}));
console.log("REDUCED", JSON.stringify(reducedInfo));

console.log("CONSOLE ERRORS", JSON.stringify(errors, null, 1));

await browser.close();
