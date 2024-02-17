import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://url-ejemplo';

    test('debe de hacer match con el snapshot', () => {
        // renderizar el componente y obtener el container para evaluar
        const  { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con la URL y el ALT indicado', () => {
        render( <GifItem title={title} url={url} /> );
        // mostrar lo que se esta renderizando
        // screen.debug();

        //expect(screen.getByRole('img').src).toBe(url+'/');
        //expect(screen.getByRole('img').alt).toBe(title);

        // obtener los valores a evaluar en una sola linea con desestructuracion
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url+'/');
        expect(alt).toBe(alt);

    });

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();
    });

});