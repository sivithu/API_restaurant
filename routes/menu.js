var express = require('express');
const { route } = require('.');
var router = express.Router();
var mock = require('../public/javascripts/mock')

/* GET users listing. */

router.get('/', function(req, res, next) {
    var idMenu = req.query.idMenu;
    var listIdMenu = req.query.listIdMenu
    if(idMenu) {
        var menuById = mock.MENU.menus.filter(menu => menu.idMenu == idMenu);
        res.json(menuById[0]);
    } else if (listIdMenu){
        let list = listIdMenu.split(',');
        let listMenu = [];
        list.forEach(id => {
            let menu = mock.MENU.menus.filter(menu => menu.idMenu == id);
            listMenu.push(menu[0]);
        })
        res.json(listMenu);
    } else {
        res.send(mock.MENU)
    }
    
});

module.exports = router;
