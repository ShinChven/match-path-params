const assert = require('assert');
const match = require('../src');

describe('test path-params-match', () => {
    it('match', (done) => {
        const path = '/series/gx7/hello/yuki/15';
        const pattern = '/series/:id/hello/:name/:age';
        const params = match(pattern, path);
        assert.ok(params.id === 'gx7');
        assert.ok(params.name === 'yuki');
        assert.ok(params.age === '15');
        done();
    });
})
