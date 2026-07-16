const fs = require('fs');
const path = require('path');

const walkSync = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkSync(filepath, callback);
    } else if (filepath.endsWith('.jsx')) {
      callback(filepath);
    }
  });
};

walkSync('./src', filepath => {
  let content = fs.readFileSync(filepath, 'utf8');
  if (content.includes('<img') && !content.includes('loading="lazy"')) {
    // Only lazy load images that aren't the logo or hero images to ensure they don't delay first paint
    if (filepath.includes('Logo.jsx') || filepath.includes('VideoIntro.jsx') || filepath.includes('Hero.jsx')) {
      return;
    }
    const newContent = content.replace(/<img\s/g, '<img loading="lazy" decoding="async" ');
    fs.writeFileSync(filepath, newContent);
    console.log('Updated ' + filepath);
  }
});
