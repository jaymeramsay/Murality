const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

// route to get artist list
router.get('/', (req, res) => {
  knex('artists')
  .then((artists) =>{

    res.render('artists/index', {artists});

  })
});

// route to post a new artist
router.post('/', (req, res) => {
  knex('artists')
  .insert(req.body)
  .then(() =>{
    res.redirect('/artists');
  })
})

// route to update an artist
router.patch('/:id', (req, res) => {
  knex('artists')
  .update(req.body)
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/artists');
  })
})

// route to delete an artist
router.delete('/:id', (req, res) => {
  knex('artists')
  .del()
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/artists');
  })
})

module.exports = router
