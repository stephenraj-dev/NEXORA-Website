const fs = require('fs');
const path = require('path');

function fixImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixImports(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('<RevealText') && !content.includes('import RevealText')) {
        // Find relative path to Common/RevealText.jsx
        // e.g. from src/components/Hero/Hero.jsx to src/components/Common/RevealText.jsx
        const srcComponentsDir = path.join(__dirname, 'src', 'components');
        const revealTextPath = path.join(srcComponentsDir, 'Common', 'RevealText');
        
        let relPath = path.relative(path.dirname(fullPath), revealTextPath).replace(/\\/g, '/');
        if (!relPath.startsWith('.')) {
          relPath = './' + relPath;
        }

        const importStatement = `import RevealText from '${relPath}';\n`;
        
        // Find the last import line
        const lines = content.split('\n');
        let lastImportIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            lastImportIndex = i;
          }
        }

        if (lastImportIndex !== -1) {
          lines.splice(lastImportIndex + 1, 0, importStatement);
          fs.writeFileSync(fullPath, lines.join('\n'));
          console.log(`Fixed imports in ${fullPath}`);
        } else {
          fs.writeFileSync(fullPath, importStatement + content);
          console.log(`Added import to top of ${fullPath}`);
        }
      }
    }
  }
}

fixImports(path.join(__dirname, 'src', 'components'));
console.log('Finished fixing imports.');
