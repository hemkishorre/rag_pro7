const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

async function cloneRepo(repoUrl) {
  console.log("Cloning repo...");
  await simpleGit().clone(repoUrl, "github.com/hemkishorre/rag_pro/repohttps://github.com/hemkishorre/rag_pro.git");
  console.log("Repository cloned!");
}

function listFiles(dir) {
  const files = [];
  function walk(folder) {
    const items = fs.readdirSync(folder, { withFileTypes: true });
    for (let item of items) {
      const fullPath = path.join(folder, item.name);
      if (item.isDirectory()) {
        walk(fullPath);
      } else {
        files.push(fullPath);
      }
    }
  }
  walk(dir);
  return files;
}

(async () => {
  const repoUrl = process.argv[2];
  if (!repoUrl) {
    console.log("Usage: node src/ingest.js https://github.com/hemkishorre/rag_pro.git");
    process.exit(1);
  }

  await cloneRepo(repoUrl);
  const files = listFiles("https://github.com/hemkishorre/rag_pro.git");
  console.log("Files found:", files.length);
})();
