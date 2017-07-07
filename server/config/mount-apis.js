
const routes = require('../APIs');


exports.mount = function mountMountApi (router) {
  router.use('/', routes)
}
