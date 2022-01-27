const fetch = require('node-fetch');
const asyncFunctions = require('./script-async-api');

jest.setTimeout(20000);

describe('promises to swapi API', () => {

    /**
     * ! ASYNC TESTING NOTES
     * 
     * TODO: - expect.assertions()
     * TODO: - done parameter for execute test after resolved promises
     * TODO: - jest.fn() to spy on behavior of function
     * 
     * @param done Done param allows us to test after promise is resolve, async call
     */
    
    it('getPeople - test with done', done => {
        expect.assertions(2);
        asyncFunctions.getPeople(fetch).then(data => {
            expect(data.count).toEqual(82);
            expect(data.count).toBeGreaterThan(5);
            done();
        });
    });

    it('getPeople - test with return', async () => {
        expect.assertions(1);
        return asyncFunctions.getPeople(fetch).then(data => {
            expect(data.count).toEqual(82);
        });
    });

    it('getPeoplePromise', () => {
        asyncFunctions.getPeoplePromise(fetch).then(data => {
            expect(data.count).toEqual(82);
        })
    });

    // Mock Function spy behavior of function that is call indirectly
    it('getPeople return counts and value', async () => {
        const mockFn = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 90,
                    results: [1, 2, 3, 4, 5, 6]
                })
            }))
        
        expect.assertions(4);
        return asyncFunctions.getPeople(mockFn)
            .then(data => {
                expect(mockFn.mock.calls.length).toBe(1);
                expect(mockFn).toHaveBeenLastCalledWith('https://swapi.dev/api/people');
                expect(data.count).toEqual(90);
                expect(data.count).toBeGreaterThan(6);
        })
    })
});
