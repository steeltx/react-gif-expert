import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// hacer un mock completo del path
jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        // simular lo que regresa la funcion
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category} />);
        // buscar los textos iniciales al momento de cargar
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'A',
                title: 'Saitama',
                url: 'example1'
            },
            {
                id: 'B',
                title: 'Goku',
                url: 'example2'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        // se renderiza el componente con los valores de useFetchGifs definidos
        render(<GifGrid category={category} />);
        // esperar que se encuentren 2 imagenes
        expect(screen.getAllByRole('img').length).toBe(2);
        
    });

});