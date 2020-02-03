const router = require('express').Router();

const editorController = require('./editor-controllers');

router.post('/update', editorController.updateEditor);

module.exports = router;