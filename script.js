const searchEngine = (searchInput, db) => {
    const results = db.filter(website => {
        return website.includes(searchInput)
    });

    return results;
}

module.exports = searchEngine;