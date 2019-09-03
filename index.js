const fs = require('fs');
const qrcode = require('qrcode');

run().catch(error => console.error(error.stack));

async function run() {
  const res = await qrcode.toDataURL('http://asyncawait.net'); // change text here

  fs.writeFileSync('./qr2.html', `<img src="${res}">`);
  console.log('Wrote to ./qr2.html: ', res);
}