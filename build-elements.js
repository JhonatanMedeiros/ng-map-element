const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/map-elements/runtime.js',
    // './dist/map-elements/polyfills.js',
    './dist/map-elements/scripts.js',
    './dist/map-elements/main.js',
  ];
  await fs.ensureDir('map-elements');
  await concat(files, 'map-elements/elements.min.js');
  await fs.copyFile('./dist/map-elements/styles.css', 'map-elements/styles.css');
  await fs.copy('./dist/map-elements/assets/', 'map-elements/assets/' );
  console.info('Map-Elements created successfully!')
})();
