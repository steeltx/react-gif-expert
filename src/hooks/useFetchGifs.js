import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * usamos un custon hook, que es una funcion
 * para realizar el proceso de la consulta con el api,
 * regresar imagenes y el estado de carga
 */

export const useFetchGifs = (category) => {

    const [images, setImages ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect no puede ser async, se usa una funcion aparte
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return {
        images,
        isLoading
    }

}