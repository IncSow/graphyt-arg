// hash-gen.js
import crypto from "crypto";

const credentials = {
  Veryleakz: "Piraterie",
  Gr4phyT34m: "Sacre",
  "05072025": "Assume",
  crASH: "Burnout",
};

const hashedMap = {};
for (const [cred, path] of Object.entries(credentials)) {
  const hash = crypto.createHash("sha256").update(cred).digest("hex");
  hashedMap[hash] = path;
}

console.log(hashedMap);
