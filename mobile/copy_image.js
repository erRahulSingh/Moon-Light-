const fs = require('fs');
const path = require('path');

const source = "C:\\Users\\rahul\\.gemini\\antigravity-ide\\brain\\0df79379-f10a-4f83-ab22-e0b27de08a0e\\indian_girl_student_nobg_1784964574865.png";
const dest = path.join(__dirname, 'assets', 'indian_girl_student.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ Image copied successfully to mobile/assets/indian_girl_student.png!');
} catch (err) {
  console.error('❌ Error copying image:', err.message);
}
