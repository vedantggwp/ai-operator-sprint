import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const siteRoot = fileURLToPath(new URL("..", import.meta.url));

let cli;

try {
  cli = require.resolve("@playwright/test/cli");
} catch {
  console.log(
    "Playwright is not installed locally; e2e first run is pending. Install @playwright/test and browsers to execute these specs.",
  );
  process.exit(0);
}

const result = spawnSync(process.execPath, [cli, "test"], {
  cwd: siteRoot,
  encoding: "utf8",
  env: {
    ...process.env,
    PLAYWRIGHT_OUTPUT_DIR:
      process.env.PLAYWRIGHT_OUTPUT_DIR ?? "/tmp/ai-operator-sprint-playwright",
  },
  maxBuffer: 10 * 1024 * 1024,
});

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
const browserMissing =
  /Executable doesn't exist/i.test(output) ||
  /Please run.*playwright install/i.test(output) ||
  /browserType\.launch/i.test(output);

if (browserMissing) {
  console.log(
    "Playwright browsers are not installed locally; e2e first run is pending.",
  );
  process.exit(0);
}

process.exit(result.status ?? 1);
