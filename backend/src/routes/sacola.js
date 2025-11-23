const express = require('express');
const router = express.Router();
const sacolaController = require('../controllers/sacolaController');

router.post('/:userId', sacolaController.adicionar);
router.get('/:userId', sacolaController.listar);

module.exports = router;
