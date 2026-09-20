const { execSync } = require("child_process"), c = require("crypto");
const out = execSync("git ls-tree -rl main -- dist", { encoding: "utf8", maxBuffer: 10e6 });
const m = {};
for (const line of out.split(/\r?\n/)) {
  const mm = line.match(/^(\d+) blob ([0-9a-f]+)\s+(\d+)\t(dist\/.+)$/);
  if (!mm) continue;
  const blob = execSync(`git cat-file blob ${mm[2]}`, { encoding: "buffer", maxBuffer: 10e6 });
  m["/" + mm[4].slice(5)] = { checksum: c.createHash("md5").update(blob).digest("hex") };
}
const fs = require("fs");
const prev = JSON.parse(fs.readFileSync("tools/manifest.json", "utf8"));
m["/_worker.js"] = prev["/_worker.js"];
fs.writeFileSync("tools/manifest.json", JSON.stringify(m));
console.log(Object.keys(m).length, "entries");
