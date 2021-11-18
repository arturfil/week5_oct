const jwt = require('jsonwebtoken');
const SECRET_KEY = 'asdfasd1234sdfkllkjasd24';

const generateJwt = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(id, SECRET_KEY, {expiresIn: "4h"}, 
    (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token);
      }
    })
  })
};

module.exports = {generateJwt}