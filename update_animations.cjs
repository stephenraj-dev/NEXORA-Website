const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('once: true')) {
        // Replace once: true with once: false, amount: 0.1 to trigger reliably
        content = content.replace(/once:\s*true/g, 'once: false, amount: 0.2');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src', 'components'));
console.log('Replaced once: true with once: false in all components.');
