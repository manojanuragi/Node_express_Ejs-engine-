const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const admintData =require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const products=admintData.products;
  res.render('shop',{props:products,doctitle:'Shop',path:'/'});
});

module.exports = router;
