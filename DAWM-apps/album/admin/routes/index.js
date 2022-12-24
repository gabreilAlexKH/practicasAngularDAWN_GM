var express = require('express');
const axios = require('axios')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/photos', async function(req, res, next) {
  
  
  const URL = 'http://localhost:4444/fotos/findAll/json'
  const response = await axios.get(URL, {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  })

  response.data.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )
  
  res.render('fotos', { title: 'Fotos', fotos: response.data });
})

module.exports = router;
