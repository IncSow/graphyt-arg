// hash-gen.js
import crypto from 'crypto';

const credentials = {
  'L4dySph0r14:09012022': '/l4dy',
  'N4V3T:27052023': 'n4v3t',
};

const hashedMap = {};
for (const [cred, path] of Object.entries(credentials)) {
  const hash = crypto.createHash('sha256').update(cred).digest('hex');
  hashedMap[hash] = path;
}

console.log(hashedMap);
