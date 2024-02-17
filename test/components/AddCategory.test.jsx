import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        // obtener el input, como solo hay 1, se puede de la siguiente manera
        const input = screen.getByRole('textbox');
        // lanzar el evento input
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
        //screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        // renderizar el componente
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        // obtener las referencias
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // lanzar el evento input
        fireEvent.input(input, {target: {value: inputValue}});
        // llamar al evento submit
        fireEvent.submit(form);

        // despues de que se lanza el submit, el input vuelve a ser vacio
        expect(input.value).toBe('');
        // revisar que la funcionfue llamada
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // evaluar que se llame con el valor de inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        // obtener las referencias
        const form = screen.getByRole('form');
        
        // llamar al evento submit
        fireEvent.submit(form);

        // si esta vacio, no se llama
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });

});