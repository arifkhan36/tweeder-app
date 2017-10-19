const db = require('../db/config');
const pgp = require('pg-promise')();

const Tweed = {};

Tweed.findAll = () => {
  return db.query(
    `SELECT * FROM tweedr`
  );
};

Tweed.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM tweedr
    WHERE id = $1`,
    [id]
  );
};

Tweed.create = (tweed) => {
  return db.one(
    `
    INSERT INTO tweedr (tweed)
    VALUES ($1)
    RETURNING *`,
    [tweed.tweed]
  );
};

module.exports = Tweed;
