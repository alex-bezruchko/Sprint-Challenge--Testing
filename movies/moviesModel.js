const db = require('../data/dbConfig.js');

module.exports = {
  fetchAll,
//   insert,
//   remove,
};



async function fetchAll() {
    return db('movies');
}


async function insert(movie) {
    
}
 
 async function remove(id) {

}

