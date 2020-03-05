const commonConfig = require('./webpack.common.config')
const merge = require('webpack-merge')

module.exports = merge(commonConfig, {
    mode: 'production'
})