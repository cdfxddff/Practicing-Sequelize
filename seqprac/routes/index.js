var express = require('express');
const seq = require('../seq.js');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  //JSON.stringfyでPromiseオブジェクトを普通のオブジェクトに変換できた
  //await させることでPromiseオブジェクトを値にできた
  //なんかいっぱい行が表示される
  const datas = await seq.sel();
  res.render('index', {
     title: 'MemoApp',
     texts: datas
    });
});

router.post('/',async (req,res,next)=>{
  const textdata = req.body.text;
  await seq.cre(textdata);
  res.redirect('/');
})

router.post('/delete',(req,res,next)=>{
  seq.drp(req.body.id);
  res.redirect('/');
})

module.exports = router;

