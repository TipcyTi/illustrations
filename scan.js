const fs = require('fs');
const files = fs.readdirSync('./public/images')
  .filter(f => /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(f));

fs.writeFileSync('./public/images.json', JSON.stringify({
  images: files.map(name => ({ name, url: `/images/${name}` }))
}, null, 2));

console.log('Scanned', files.length, 'images');