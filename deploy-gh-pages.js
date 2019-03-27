const ghpages = require('gh-pages');

const GH_TOKEN = process.env.GH_TOKEN || 'TOKEN';
const GH_EMAIL = process.env.GH_EMAIL || 'EMAIL';

ghpages.publish('demo', {
  branch: 'gh-pages',
  repo: `https://${GH_TOKEN}@github.com/JhonatanMedeiros/ng-map-element.git`,
  silent: false,
  user: { name: 'Jhonatan Medeiros', email: GH_EMAIL}
}, (msg) => console.log(msg));
