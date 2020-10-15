const express = require('express');
const router = express.Router();

/* CONTROLLER! */
const alunniController = require('../controller/alunniController');

router.route('/').get((req, res) => {
  res.send('API registroSerio\nendpoints:\n/alunni\n');
});

router
  .route('/alunni')
  .get(alunniController.read)
  .post(alunniController.create);

router
  .route('/alunni/:id')
  .get(alunniController.read_one)
  .patch(alunniController.update)
  .delete(alunniController.delete);

module.exports = router;
