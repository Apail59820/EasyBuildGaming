const crypto = require('crypto');

function SHA256(inputString) {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}

function MD5(inputString) {
    const md5Hash = crypto.createHash('md5');
    md5Hash.update(inputString);
    return md5Hash.digest('hex');
}

function hash(data) {
    return SHA256(MD5(data));
}

module.exports = { hash };
