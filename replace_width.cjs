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
      if (content.includes('max-w-7xl')) {
        content = content.replace(/max-w-7xl/g, 'max-w-[90rem]');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Replaced max-w-7xl with max-w-[90rem]');
