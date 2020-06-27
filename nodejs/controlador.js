const dataModel = require('./modelo');

const ctrlDatos = 
{
    findState: async (req, res) =>
    {
        const data = await dataModel.getState(req.params.estado);
        res.json({clave: data.data.datos[0].cve_agee, nombre: data.data.datos[0].nom_agee, poblacion: data.data.datos[0].pob, femenina: data.data.datos[0].opb_fem, masculina: data.data.datos[0].pob_mas, viviendas: data.data.datos[0].viv});
    },

    findCity: async (req, res) =>
    {
        const data = await dataModel.getCity(req.params.cve);
        var arr = [];
        for(var i = 0; i < data.data.numReg; i++)
        {
            arr.push({clave_e: data.data.datos[i].cve_agee, clave: data.data.datos[i].cve_agem, nombre: data.data.datos[i].nom_agem, poblacion: data.data.datos[i].pob, femenina: data.data.datos[i].pob_fem, masculina: data.data.datos[i].pob_mas, viviendas: data.data.datos[i].viv});
        }
        res.json(arr);
    }

};

module.exports = ctrlDatos;