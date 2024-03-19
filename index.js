const data_harvest_navigator = require('data-harvest-navigator');
const harvest_navi_prov = require('harvest-navi-prov');
const eth_crypto = require('eth-crypto');
const jest = require('jest');
const mongoose = require('mongoose');
const web3_react = require('web3-react');
const jsonwebtoken = require('jsonwebtoken');
const multer = require('multer');
const truffle = require('truffle');
const node_sass = require('node-sass');
const ethereumjs_util = require('ethereumjs-util');

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

const fs = require('fs');
fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.isDirectory() ? `${file.name} is a directory` : `${file.name} is a file`);
  });
});

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum is ${sum}`);

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const https = require('https');
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/api/data',
  method: 'GET'
};
const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Response data:', data);
  });
});
req.end();