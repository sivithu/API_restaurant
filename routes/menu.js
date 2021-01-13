var express = require('express');
const { route } = require('.');
var router = express.Router();
var mock = require('../public/javascripts/mock')

/* GET users listing. */

router.get('/', function(req, res, next) {
    var idMenu = req.query.idMenu;
    if(idMenu) {
        var menuById = mock.MENU.menus.filter(menu => menu.idMenu == idMenu);
        res.json(menuById[0]);
    } else {
        res.send(mock.MENU)
    }
    
});

module.exports = router;
