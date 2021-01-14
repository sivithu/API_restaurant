var express = require('express');
const { route } = require('.');
var router = express.Router();
var mock = require('../public/javascripts/mock')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(mock.STORES);
});

router.get('/:postalCode', function(req, res, next) {
    console.log("trest")
    var postalCode = req.params.postalCode;
    var price = parseInt(req.query.price);
    var preparationTime = parseInt(req.query.preparationTime);

    var storesByPostalCode = mock.STORES.stores.filter(store => store.location.postal_code == postalCode);
    var storesFiltered = mock.STORES.stores.filter(store => {
        return (store.location.postal_code == postalCode) && (store.price_bucket <= price) && (store.avg_prep_time <= preparationTime)
    });

    if(postalCode && price && preparationTime) {
        res.json(storesFiltered);
    } else {
        res.json(storesByPostalCode);
    }

    
});

module.exports = router;
