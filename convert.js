const fs = require('fs');

const asn1exp = require('asn1exp');
const parseArgs = require('minimist');
const getStdin = require('get-stdin');

const argv = parseArgs(process.argv.slice(2), {
  boolean: 'min'
});

const fileRead = process.argv[2]
  ? Promise.resolve(fs.readFileSync(process.argv[2], 'UTF-8'))
  : getStdin();

fileRead
  .then((s) => {
    const parsed = asn1exp.parse(s);

    if (argv.min) {
      console.log(JSON.stringify(parsed.blocks));
    } else {
      console.log(JSON.stringify(parsed.blocks, null, 2));
    }
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
