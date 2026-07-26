const fs = require('fs');
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
