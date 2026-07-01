/**
 * Build script for Whiz-Unik Email Server
 *
 * Copies the necessary source files to dist/ so that the
 * server can be deployed via PM2 from a self-contained directory.
 *
 * Usage: node scripts/build.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

// Directories to copy fully
const COPY_DIRECTORIES = ["server", "public"];

// Files to copy individually
const COPY_FILES = ["package.json", ".env.example"];

function rmSync(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean previous build
console.log("Cleaning dist/ ...");
rmSync(DIST);

// Copy directories
for (const dir of COPY_DIRECTORIES) {
  const src = path.join(ROOT, dir);
  const dest = path.join(DIST, dir);
  if (fs.existsSync(src)) {
    console.log(`Copying ${dir}/ ...`);
    copyRecursive(src, dest);
  } else {
    console.log(`Skipping ${dir}/ (not found)`);
  }
}

// Copy individual files
for (const file of COPY_FILES) {
  const src = path.join(ROOT, file);
  const dest = path.join(DIST, file);
  if (fs.existsSync(src)) {
    console.log(`Copying ${file} ...`);
    fs.copyFileSync(src, dest);
  } else {
    console.log(`Skipping ${file} (not found)`);
  }
}

console.log("\n✅ Build complete! dist/ is ready for deployment.");
console.log("   Run: cd dist && npm install --production");
