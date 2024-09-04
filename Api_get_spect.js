import { test,expect } from '@playwright/test';


test('Sauce Test', async ({ page }) => {


        const contexto = page.context() // separo el context de la page
        const requerimiento = contexto.request


        const respuesta = await requerimiento.get('https://cursotesting.com.ar:3000/personas/listado',
                                                    {Headers:{'Content-type':'application/json'},})


            //Test n°1: revisar si volvió un codigo 200
            expect(respuesta.status()).toBe(200)
});


//////////////////////////// Análisis de lo recibido 


const respuestaJson = await respuesta.json()
console.log(respuestaJson)
var cuenta = 1;
for(const mispersonas of respuestaJson){
    const {id,nombre} = mispersonas
    console.log(cuenta +") "+ id + " - " + nombre)
    cuenta++
}
    //// epero que sean 9 personas

    expect(respuestaJson.length).toBe(9)
const persona =respuestaJson.find(persona => persona.id === 15 && persona.nombre === 'Alejandra')




if(persona){
expect(persona.nombre).toBe('Alejandra')
expect(persona.id).toBe(15)
}
