/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Venue = require('../api/venue/venue.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Venue.find({}).remove(function() {
  Venue.create({
    name: 'Universidad Antonio José Camacho',
    address: 'Avenida 6 # 28N - 102',
    location: 'Cali, Colombia',
    lat: 3.4703734,
    lng: -76.52747060000002,
    info: 'Somos una institución de educación superior patrimonio de los caleños, generadora y difusora de conocimientos con una objetiva visión de servicio a la sociedad y tenemos como misión la formación integral de profesionales de alto nivel, con conciencia de su papel de actores y promotores del desarrollo regional y nacional',
    active: true
  }, {
    _id: '5528e5e9eb9e685811ed92ca',
    name: 'Universidad del Valle',
    address: 'Calle 13 # 100-00',
    location: 'Cali, Colombia',
    lat: 3.3748997,
    lng: -76.53352489999997,
    info: 'Comúnmente conocida como Univalle, es la principal institución de educación superior del suroccidente de Colombia.',
    active: true
  }, function() {
      console.log('finished populating venues');
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});