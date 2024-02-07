var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET all products. */
/*router.get('/', products.getAllProducts);

router.post('/save', products.saveProduct);

router.get('/find/:id', products.searchProduct);

router.delete('/delete/:id', products.deleteProduct);

router.put('/update/:id', products.updateProduct);*/

module.exports = router;