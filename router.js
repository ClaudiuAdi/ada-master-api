const { Router } = require('express');
const { errorHandler, fail, notFound, slow } = require('./middleware');
const {
  identity,
  abonament,
  area,
  coach,
  dashboard,
  event,
  lesson,
  match,
  player,
  sport,
} = require('./routes');

const router = Router();
module.exports = router;

// useful middleware for testing
router.use(fail);
router.use(slow);

// use the router instances defined
router.use(identity);
router.use(abonament);
router.use(area);
router.use(coach);
router.use(dashboard);
router.use(event);
router.use(lesson);
router.use(match);
router.use(player);
router.use(sport);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
