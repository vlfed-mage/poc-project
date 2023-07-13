const { merge } = require('webpack-merge');
const baseCnf = require('./base.config');

module.exports = ENV => {
    const { env } = ENV;
    const envCnf = require(`./${env}.config.js`);

    return merge(baseCnf, envCnf);
};
