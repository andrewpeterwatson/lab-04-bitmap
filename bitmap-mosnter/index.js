'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const fs = require('fs');

//read bitmapfile
bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  var newobject = new bitobject.Buffobject(data);
  console.log(newobject);
  newobject.colorpalette.fill(128);
  fs.writeFile('./lulwat.bmp', data);
});

//write new bitmapfile
/*bitmapreader.newbitmapfile(brandnewbuffer, (err, data) => {
  console.log(data);
});*/
