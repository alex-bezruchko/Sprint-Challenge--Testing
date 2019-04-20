const db = require('../data/dbConfig.js');

module.exports = {
  fetchAll,
  insert,
//   remove,
};



async function fetchAll() {
    return db('movies');
}


async function insert(movie) {
    const [id] = await db('movies').insert(movie);
    return db('movies').where({id}).first();
}
 
 async function remove(id) {

}

