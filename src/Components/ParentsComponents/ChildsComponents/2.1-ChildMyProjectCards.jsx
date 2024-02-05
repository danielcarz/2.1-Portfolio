import React from "react";

//ui components
import { CardUI } from '../../UiComponentes/Card';

//styles
import '../../../Sass/SassComponents/SassChildComponents/2.1-ChildMyProjectCards.scss';

export const ChildMyProjectCards = () => {


    return(
        <section className="CardWrapper">
            <CardUI></CardUI>
            <CardUI></CardUI>
            <CardUI></CardUI>
            <CardUI></CardUI>
            <CardUI></CardUI>
            <CardUI></CardUI>
        </section>
    )
} 