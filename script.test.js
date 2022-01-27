const searchEngine = require('./script');

// DB
const db = [
    'cats-v1.com',
    'cats-v1.com',
    'cats-v1.com',
    'horse.com',
    'horse-v2.com',
    'dog.com'
];

describe('searchEngine', () => {
    it('This is a silly test', () => {
        expect('hello').toBe('hello')
    });

    it('full list', () => {
        expect(searchEngine('', db)).toEqual([
        'cats-v1.com',
        'cats-v1.com',
        'cats-v1.com',
        'horse.com',
        'horse-v2.com',
        'dog.com'
        ]);
    });

    it('cats', () => {
        expect(searchEngine('cat', db)).toEqual([
        'cats-v1.com',
        'cats-v1.com',
        'cats-v1.com',
        ]);
    });

    it('horse', () => {
        expect(searchEngine('horse', db)).toEqual([
        'horse.com',
        'horse-v2.com',
        ]);
    });

    it('undefined && null', () => {
        expect(searchEngine(null, db)).toEqual([]);
        expect(searchEngine(undefined, db)).toEqual([]);
    })
})

