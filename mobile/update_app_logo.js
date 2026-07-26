const fs = require('fs');
const path = require('path');

const sourceLogo = "C:\\Users\\rahul\\.gemini\\antigravity-ide\\brain\\9e5d0fe5-d1d6-4a81-9082-98238b5a9f87\\app_logo_1784989121859.png";
const assetsDir = path.join(__dirname, 'assets');

const destinations = [
  path.join(assetsDir, 'logo.png'),
  path.join(assetsDir, 'icon.png'),
  path.join(assetsDir, 'adaptive-icon.png'),
  path.join(assetsDir, 'favicon.png'),
  path.join(assetsDir, 'splash.png')
];

try {
  if (!fs.existsSync(sourceLogo)) {
    console.error(`❌ Source logo not found at: ${sourceLogo}`);
    process.exit(1);
  }

  destinations.forEach(dest => {
    fs.copyFileSync(sourceLogo, dest);
    console.log(`✅ Copied logo to: ${dest}`);
  });

  console.log('\n🎉 Logo successfully implemented as header logo, app icon, adaptive icon, favicon, and splash screen!');
} catch (err) {
  console.error('❌ Error copying logo assets:', err.message);
}
