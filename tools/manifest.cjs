const fs = require("fs"), p = require("path"), c = require("crypto");
const m = {};
(function w(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = p.join(d, e.name);
    if (e.isDirectory()) w(f);
    else m["/" + p.relative("dist", f).split(p.sep).join("/")] = { checksum: c.createHash("md5").update(fs.readFileSync(f)).digest("hex") };
  }
})("dist");
fs.writeFileSync("tools/manifest.json", JSON.stringify(m));
console.log(Object.keys(m).length, "files");
