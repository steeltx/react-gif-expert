import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en getGifs()', () => {

    test('debe de retornar un arreglo de gifs', async () => {
        
        const gifs = await getGifs('Goku');
        // se espera un arreglo de gifs
        expect(gifs.length).toBeGreaterThan(0);
        // se evalua que la estructura del primer elemento sea la siguiente
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });

});