const { pathToRegexp } = require('path-to-regexp');

/**
 * match path with pattern, and return params map.
 * @param {string} pattern pattern for your path. 
 * @param {string} path your path to match the pattern
 * return {object} 
 */
module.exports = function (pattern, path) {
    try {
        const {pathToRegexp} = require('path-to-regexp');
        const result = pathToRegexp(pattern).exec(path);
        const keys = pattern.split('/').filter(name => {
            return name.indexOf(':') === 0;
        }).map(name => name.replace(':', ''));
        let params = {}
        for (let i = 1; i <= keys.length; i++) {
            params[keys[i - 1]] = result[i];
        }
        return params;
    } catch (err) {
        throw err;
    }
}