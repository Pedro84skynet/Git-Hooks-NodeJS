const sum = require('../src/sum')

it('should return corret sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})