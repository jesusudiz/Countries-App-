const { Router } = require('express');
const ruta = require("../controllers/index")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', ruta.getCountries )
router.get('/countries/:id', ruta.getCountriesById )
router.post('/activities',ruta.postActivities  )
router.get('/activities',ruta.getActivities  )
router.delete('/countries',ruta.deleteCountry )
router.delete('/countries',ruta.deleteActivity )


module.exports = router;
