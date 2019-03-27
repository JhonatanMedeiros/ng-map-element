const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/geo-map-element/runtime.js',
    './dist/geo-map-element/polyfills.js',
    './dist/geo-map-element/scripts.js',
    './dist/geo-map-element/main.js',
  ];
  await fs.ensureDir('geo-map-element');
  await concat(files, 'geo-map-element/geo-map-element.min.js');
  await fs.copyFile('./dist/geo-map-element/styles.css', 'geo-map-element/styles.css');
  await fs.copy('./dist/geo-map-element/assets/', 'geo-map-element/' );
  console.info('Geo Map Element created successfully!')
})();
