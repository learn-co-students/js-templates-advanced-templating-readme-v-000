/*

The following listing shows how to use Node’s fs module to create read- and write-streams that can be piped through another stream (gzip) to transform the data—in this case, by compressing it.

*/

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream('output.js.gz');

fs.createReadStream('./node-stream.js')
  .pipe(gzip)
  .pipe(outStream);
