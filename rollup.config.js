const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const buble = require('rollup-plugin-buble')
const terser = require('rollup-plugin-terser').terser
const pkg = require('./package.json')

module.exports = [
    // ES6 Modules Non-minified
    {
        input: 'lib/index.js',
        output: {
            file: pkg.browser.replace(/\.js$/, '.mjs'),
            format: 'esm',
        },
        plugins: [
            resolve(),
            commonjs(),
        ],
    },
    // ES6 Modules Minified
    {
        input: 'lib/index.js',
        output: {
            file: pkg.browser.replace(/\.js$/, '.min.mjs'),
            format: 'esm',
        },
        plugins: [
            resolve(),
            commonjs(),
            terser(),
        ],
    },
]