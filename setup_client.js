const fs = require('fs');
const path = require('path');

const write = (filepath, content) => {
  const fullPath = path.join(__dirname, 'rehabconnect', filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n');
};

write('client/src/index.css', `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
@import 'tailwindcss';

@theme {
  --font-sans: 'Outfit', system-ui, sans-serif;
  --font-serif: 'DM Serif Display', Georgia, serif;
  --color-teal-950: #042f2e;
  --color-teal-900: #134e4a;
  --color-teal-800: #115e59;
  --color-teal-700: #0f766e;
  --color-teal-600: #0d9488;
  --color-teal-500: #14b8a6;
  --color-teal-100: #ccfbf1;
  --color-teal-50: #f0fdfa;
  --color-amber-400: #fbbf24;
  --color-amber-500: #f59e0b;
  --color-amber-50: #fffbeb;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Outfit', system-ui, sans-serif;
  background: #f8fafc;
}
`);

write('client/src/main.tsx', `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`);


console.log("Client files generated!");