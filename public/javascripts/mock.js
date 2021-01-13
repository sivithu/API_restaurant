const STORES = {
    "stores" : [
        {
          "name": "East Coast Sushi",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "93200",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus": [1, 2, 3],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 15,
          "avg_prep_time": 5,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "West Coast Sushi",
          "store_id": "d8ce1955-d78a-469b-91a4-01f0b23f9213",
          "location": {
            "address": "1455 Market Street",
            "address_2": "Floor 4",
            "city": "San Francisco",
            "country": "US",
            "postal_code": "93200",
            "state": "CA",
            "latitude": 37.775232,
            "longitude": -122.417528
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-west@example.com"
          ],
          "menus": [1, 2 ,3],
          "raw_hero_url": "https://www.example.com/hero_url_west.png",
          "price_bucket": 15,
          "avg_prep_time": 10,
          "status": "active",
          "partner_store_id": "786541"
        },
        {
          "name": "Le grec du coin",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "93240",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus":[4, 5, 6],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 10,
          "avg_prep_time": 10,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "La pizzeria du coin",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "93240",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus":[7, 8, 9],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 10,
          "avg_prep_time": 15,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "Le grec énervé",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "93200",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus":[4, 5, 6],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 10,
          "avg_prep_time": 10,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "West Coast Sushi",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "92130",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus":[1, 2, 3],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 15,
          "avg_prep_time": 15,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "South Coast Sushi",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "92130",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus":[1, 2, 3],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 15,
          "avg_prep_time": 10,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "La pizzeria énervé",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "92130",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "menus": [7, 8, 9],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 10,
          "avg_prep_time": 5,
          "status": "active",
          "partner_store_id": "541324"
        },
        {
          "name": "Le grec étoilé",
          "store_id": "7e973b58-40b7-4bd8-b01c-c7d1cbd194f6",
          "location": {
            "address": "9 avenue charles de gaulle",
            "address_2": "Floor 3",
            "city": "Stains",
            "country": "FR",
            "postal_code": "92130",
            "state": "Ile de France",
            "latitude": 40.7527198,
            "longitude": -74.00635
          },
          "menus": [4, 5, 6],
          "contact_emails": [
            "owner@example.com",
            "announcements+uber@example.com",
            "store-east@example.com"
          ],
          "raw_hero_url": "https://www.example.com/hero_url_east.png",
          "price_bucket": 10,
          "avg_prep_time": 5,
          "status": "active",
          "partner_store_id": "541324"
        }
      ]
}

const MENU = {
    "menus" : [
        {
            "idMenu" : 1,
            "name" : "Sushi Extra",
            "price" : 13,
        },
        {
            "idMenu" : 5,
            "name" : "Le western",
            "price" : 10,
        },
        {
            "idMenu" : 6,
            "name" : "Grec",
            "price" : 8,
        },
        {
            "idMenu" : 4,
            "name" : "Triple Steak",
            "price" : 10,
        },
        {
            "idMenu" : 2,
            "name" : "Sakura",
            "price" : 15,
        },
        {
            "idMenu" : 3,
            "name" : "Sushi Moyen",
            "price" : 10,
        },
        {
            "idMenu" : 7,
            "name" : "Le Parisien",
            "price" : 7,
        },
        {
            "idMenu" : 8,
            "name" : "La Buffalo",
            "price" : 8,
        },
        {
            "idMenu" : 9,
            "name" : "La végétarienne",
            "price" : 8,
        }
    ] 
}

module.exports = {
    STORES: STORES,
    MENU: MENU
};