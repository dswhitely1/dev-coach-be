const router = require('express').Router();

const editorController = require('./editor-controllers');

router.post('/upate', editorController.updateEditor);

module.exports = router;