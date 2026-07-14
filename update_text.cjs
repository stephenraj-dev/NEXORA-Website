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
      let originalContent = content;
      
      // We will look for <motion.h2 ...>Text</motion.h2> 
      // or <h2 ...>Text</h2>
      // This is a naive regex but it works for pure text nodes
      
      const tags = ['h1', 'h2', 'h3', 'p'];
      let modified = false;

      // Ensure import RevealText exists if we modify
      for (const tag of tags) {
        // Match <tag className="...">Text</tag>
        // Regex explanation:
        // <(motion\.)?tag ([^>]*)>([^<]+)<\/\1?tag>
        // group 1: motion. or undefined
        // group 2: props
        // group 3: inner text (no HTML tags)
        
        const regex = new RegExp(`<((?:motion\\.)?${tag})([^>]*)>([^<]+)<\\/\\1>`, 'g');
        
        content = content.replace(regex, (match, p1, p2, p3) => {
          if (p3.trim().length === 0) return match; // skip empty
          // check if it's already using RevealText or something complex inside
          if (p3.includes('{')) return match; // skip if it contains variables

          modified = true;
          return `<RevealText as="${tag}"${p2} text="${p3.trim()}" />`;
        });
      }

      if (modified) {
        // Add import
        if (!content.includes('RevealText')) {
          // find last import
          const importMatches = [...content.matchAll(/^import.*$/gm)];
          const lastImport = importMatches[importMatches.length - 1];
          if (lastImport) {
            const index = lastImport.index + lastImport[0].length;
            // determine relative path to components/Common/RevealText
            const depth = fullPath.split(path.sep).length - dir.split(path.sep)[0].length; // rough estimate
            // better to use absolute alias or compute relative
            // Since we are in src/components/..., relative path is:
            const relativeToSrc = path.relative(path.dirname(fullPath), path.join(__dirname, 'src', 'components', 'Common', 'RevealText'));
            // replace windows \ with /
            let importPath = relativeToSrc.replace(/\\/g, '/');
            if (!importPath.startsWith('.')) {
              importPath = './' + importPath;
            }
            content = content.slice(0, index) + `\nimport RevealText from '${importPath}';` + content.slice(index);
          }
        }
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src', 'components'));
console.log('Done replacing text tags.');
