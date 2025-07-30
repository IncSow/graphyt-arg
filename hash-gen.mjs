// hash-gen.js
import crypto from "crypto";

const credentials = {
  VeryleakzSALTY: "Piraterie",
  Gr4phyT34mSALTY: "Sacre",
  "05072025SALTY": "AssumeSALTY",
  crASHSALTY: "BurnoutSALTY",
  "09012022SALTY": "l4dy",
  "27052023SALTY": "N4V3T",
};

const hashedMap = {};
for (const [cred, path] of Object.entries(credentials)) {
  const hash = crypto.createHash("sha256").update(cred).digest("hex");
  hashedMap[hash] = path;
}

console.log(hashedMap);
