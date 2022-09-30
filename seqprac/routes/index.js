var express = require('express');
const seq = require('../seq.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //datasかres.renderでおかしくなっている
  const datas = seq.sel();
  res.render('index', {
     title: 'MemoApp',
     texts: datas
    });
});
/*
router.post('/',(req,res,next)=>{
  const textdata = req.body.text;
  seq.cre(textdata);
  res.redirect('/');
})

router.post('/delete',(req,res,next)=>{
  seq.drp(req.body.id);
  res.redirect('/');
})
*/

module.exports = router;
