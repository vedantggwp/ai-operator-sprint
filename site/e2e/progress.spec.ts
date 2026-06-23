import { expect, test } from "@playwright/test";

const progressKey = "ai-operator-sprint:progress";

test("start commitment, lock Day 0, and mark it done", async ({ page }) => {
  await page.goto("/");
  await page.evaluate((key) => window.localStorage.removeItem(key), progressKey);

  await page.goto("/start");

  const lockButton = page.getByRole("button", { name: "Lock it in" });
  await expect(lockButton).toBeDisabled();

  await page.getByLabel("What you will build").fill("a review triage system");
  await page.getByLabel("Who you will demo it to").fill("my mentor");
  await expect(lockButton).toBeEnabled();

  await lockButton.click();
  await expect(page).toHaveURL(/\/day\/0$/);
  await expect(page.getByLabel("Committed artefact")).toContainText(
    "Day 0 commitment",
  );

  await page.getByRole("button", { name: "Mark today done" }).click();
  await expect(page.getByRole("button", { name: "Marked done" })).toBeVisible();
  await expect
    .poll(
      async () =>
        page.evaluate((key) => {
          const raw = window.localStorage.getItem(key);
          const progress = raw ? JSON.parse(raw) : {};
          return Array.isArray(progress.completed)
            ? progress.completed.includes(0)
            : false;
        }, progressKey),
      { message: "Day 0 is stored as completed" },
    )
    .toBe(true);

  await page.goto("/curriculum");
  await expect(
    page.getByRole("link", {
      name: "Day 00: The Commitment. Done.",
    }),
  ).toBeVisible();
});

test("today resumes a gapped sprint without shame copy", async ({ page }) => {
  await page.goto("/");
  await page.evaluate((key) => {
    const start = new Date();
    start.setDate(start.getDate() - 5);
    const sprintStart = [
      start.getFullYear(),
      String(start.getMonth() + 1).padStart(2, "0"),
      String(start.getDate()).padStart(2, "0"),
    ].join("-");

    window.localStorage.setItem(
      key,
      JSON.stringify({ sprintStart, completed: [0] }),
    );
  }, progressKey);

  await page.goto("/today");
  await expect(page).toHaveURL(/\/day\/1\?pickup=1$/);
  await expect(
    page.getByText("Pick up where you left off. Day 01 is ready. No reset required."),
  ).toBeVisible();
  await expect(page.getByText(/behind|late|missed|failed|shame/i)).toHaveCount(0);
});
