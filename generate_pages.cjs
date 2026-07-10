const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'About', 'Services', 'Solutions', 
  'Products', 'Industries', 'Careers', 'Contact', 'NotFound'
];

pages.forEach(page => {
  const dir = path.join(__dirname, 'src', 'pages', page);
  fs.mkdirSync(dir, { recursive: true });
  const code = `import React from 'react';

const ${page} = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">${page} Page</h1>
      </div>
    </div>
  );
};

export default ${page};
`;
  fs.writeFileSync(path.join(dir, `${page}.jsx`), code);
});

console.log('Dummy pages created.');
