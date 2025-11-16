import { execSync } from "node:child_process";

try {
  execSync("npm run build", { stdio: "inherit" });
  console.log("Build completed successfully.");
} catch (error) {
  console.error("Build failed.");
  process.exit(1);
}
