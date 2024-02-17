import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => {
        // para llamar un hook, se debe de hacer de la siguiente manera
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        // obtener los valores que regresa el hook dentro del result del renderHook
        const { images, isLoading } = result.current;

        // en el estado inicial, no hay imagenes y el estado de carga es true
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de regresar un arreglo de imagenes, isLoading en false', async () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        // esperar hasta que el resultado de las imagenes sea mayor que 0
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});