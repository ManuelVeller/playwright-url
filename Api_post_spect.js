import { test,expect } from '@playwright/test';


test('Token Test', async ({ page }) => {


        const contexto = page.context() // separo el context de la page
        const requerimiento = contexto.request
        // tengo que cargar los datos del "post" previo a llamar a la API
        const pidoToken = {
                            "username":"institutoweb",
                            "password":"cursoperformance"
                          }
        /// llamo a la api por post
        const respuesta = await requerimiento.post('https://cursotesting.com.ar:3000/token',
                                                    {data: pidoToken, //es necesario aclarar que pido un json, ya que, en js no se escriben los valores con "" 
                                                    Headers:{'Content-type':'application/json'},})

        // Lo que recibo, lo convierto en json                                                
        const respuestaJson = await respuesta.json()
        console.log(respuesta)
        console.log("---")
        console.log(respuestaJson)
        console.log("---")
        console.log(respuestaJson.token)

});


