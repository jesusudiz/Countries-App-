const api = require('../api/index');
const { Country, Activity } = require("../db.js");


const getCountries = async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {
            const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            const country = await Country.findOne({
                where: { nombre: nameCapitalized }
            });

            if (!country) {
                return res.status(404).send({ message: "País no encontrado" });
            }

            return res.status(200).send(country);
        } else {
            const countries = await Country.findAll();
            return res.status(200).send(countries);
        }
    } catch (error) {
        return res.status(500).send({ message: "Error en el servidor" });
    }
};

const getCountriesById = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== "string" || id.length > 3) {
            return res.status(400).send({ message: "Lo sentimos, debe buscar el ID con solo 3 letras representativas del país." })
        } else if (id) {
            const country = await Country.findByPk(id)
            if (!country) {
                return res.status(404).send({ message: "ID no existe por favor intente con otro" })
            }
            return res.status(200).send(country);
        }
    } catch (error) {
        return res.status(500).send({ message: "El ID solicitado no existe" })
    }
}

const postActivities = async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada, pais } = req.body;
        if (!nombre || !dificultad || !duracion || !temporada || !pais) {
            throw new Error("Faltan parámetros, por favor ingrese todos los datos");
        }
       
        if (isNaN(dificultad) || isNaN(duracion)) {
            throw new Error("La dificultad debe ser un entero y la duración debe ser un número");
        }
       let setDificultad = parseInt(dificultad);
       let setDuracion = parseFloat(duracion);
        const activity = {
            nombre:nombre,
            dificultad:setDificultad,
            duracion:setDuracion,
            temporada:temporada,
            pais:pais
        };

        await Activity.create(activity);
       
        
        const paises = activity.pais;
        const activities = [activity].map(item => {
            return {
                nombre: item.nombre,
                dificultad: item.dificultad,
                duracion: item.duracion,
                temporada: item.temporada
            }
        });
        const countries = await Country.findAll({ where: { nombre: paises } });
        const promises = [];
        for (const country of countries) {
            promises.push(country.addActivity(activities));
        }
        await Promise.all(promises);
        
        return res.status(201).send({ message: "Creado exitosamente" });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
};


const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        return res.status(200).send(activities)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}

const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== "string" || id.length > 3) {
            throw new Error("Los parámetros no son correctos");
        } else {
            const country = await Country.findByPk(id);
            if (!country) {
                return res.status(404).send({ message: "ID no encontrado" });
            }
            await Country.destroy({ where: { id } });
            return res.status(200).send({ message: "País eliminado exitosamente" });
        }
    } catch (error) {
        return res.status(500).send({ message: "Error en el servidor" });
    }
};




const deleteActivity = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar que el id sea válido
        if (typeof id !== "number") {
            throw new Error("El ID no es válido");
        }

        // Buscar la actividad a eliminar
        const activity = await Activity.findByPk(id);

        // Si no se encuentra la actividad, retornar un mensaje de error
        if (!activity) {
            return res.status(404).send({ message: "Actividad no encontrada" });
        }

        // Eliminar la actividad
        await activity.destroy();

        // Retornar un mensaje de éxito
        return res.status(200).send({ message: "Actividad eliminada con éxito" });
    } catch (error) {
        // Si ocurre un error, retornar un mensaje de error
        return res.status(500).send({ message: error.message });
    }
};




module.exports = {
    getCountries,
    getCountriesById,
    getActivities,
    deleteActivity,
    deleteCountry,
    postActivities
}