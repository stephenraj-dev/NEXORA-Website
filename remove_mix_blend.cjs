const fs = require('fs');
const path = require('path');

function removeMixBlendDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeMixBlendDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('mix-blend-overlay')) {
        content = content.replace(/mix-blend-overlay/g, '');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

removeMixBlendDir(path.join(__dirname, 'src'));
console.log('Removed mix-blend-overlay from all jsx files.');
