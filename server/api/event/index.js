'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.get('/:slug', controller.showSlug);
router.post('/', controller.create);
router.post('/:id/comment', controller.commentEvent);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;