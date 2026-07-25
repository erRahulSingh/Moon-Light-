const fs = require('fs');
const path = require('path');

const brainDir = "C:\\Users\\rahul\\.gemini\\antigravity-ide\\brain\\0df79379-f10a-4f83-ab22-e0b27de08a0e";
const destDir = path.join(__dirname, 'assets');

try {
  const files = fs.readdirSync(brainDir);
  const mediaFiles = files.filter(f => f.startsWith('media__') && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')));
  
  if (mediaFiles.length === 0) {
    console.error('❌ No media files found in brain directory.');
    process.exit(1);
  }

  // Sort files by the timestamp suffix inside the name (e.g. media__1784966383007.jpg -> 1784966383007)
  mediaFiles.sort((a, b) => {
    const tA = parseFloat(a.split('__')[1]) || 0;
    const tB = parseFloat(b.split('__')[1]) || 0;
    return tB - tA; // descending, so index 0 is the latest
  });

  const latestFile = mediaFiles[0];
  const sourcePath = path.join(brainDir, latestFile);
  const ext = path.extname(latestFile);
  const destPath = path.join(destDir, 'logo' + ext);

  fs.copyFileSync(sourcePath, destPath);
  console.log(`✅ Copied latest media ${latestFile} to ${destPath}`);
  
  // Write a small json config so App.tsx knows the extension
  fs.writeFileSync(path.join(__dirname, 'logo-config.json'), JSON.stringify({ ext }));
} catch (err) {
  console.error('❌ Error executing copy logo:', err.message);
}
