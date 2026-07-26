const fs = require('fs');
const path = require('path');

const src = 'C:/Users/rahul/.gemini/antigravity-ide/brain/44e675ff-5e1e-4038-b6dd-c137efeff913/media__1785083704416.png';
const dest = 'd:/Moon Light/public/logo.png';

try {
  fs.copyFileSync(src, dest);
  console.log('Logo copied successfully!');
} catch (err) {
  console.error('Error copying logo:', err);
}

const path = require('path');
const { execSync } = require('child_process');

const assetsDir = path.join(__dirname, 'assets');
console.log('--- Checking PNG Magic Headers in mobile/assets ---');

fs.readdirSync(assetsDir).forEach((file) => {
  if (file.endsWith('.png')) {
    const filePath = path.join(assetsDir, file);
    const buf = fs.readFileSync(filePath);
    const magic = buf.slice(0, 8).toString('hex');
    const isStandardPng = magic === '89504e470d0a1a0a';
    console.log(`${file}: magic=${magic} (Standard PNG? ${isStandardPng ? 'YES ✅' : 'NO ❌'})`);
  }
});

console.log('\n--- Running PowerShell PNG Converter ---');
try {
  const psScript = path.join(__dirname, 'fix_png_assets.ps1');
  const out = execSync(`powershell -ExecutionPolicy Bypass -File "${psScript}"`, { encoding: 'utf8' });
  console.log(out);
} catch (err) {
  console.error('PowerShell execution error:', err.message);
}

console.log('\n--- Verification After Conversion ---');
fs.readdirSync(assetsDir).forEach((file) => {
  if (file.endsWith('.png')) {
    const filePath = path.join(assetsDir, file);
    const buf = fs.readFileSync(filePath);
    const magic = buf.slice(0, 8).toString('hex');
    const isStandardPng = magic === '89504e470d0a1a0a';
    console.log(`${file}: magic=${magic} (Standard PNG? ${isStandardPng ? 'YES ✅' : 'NO ❌'})`);
  }
});
