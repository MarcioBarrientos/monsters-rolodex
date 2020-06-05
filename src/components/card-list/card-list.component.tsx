import React from "react";
import './card-list.styles.css'
import {Card} from "../card/card.component";

export const CardList = (props: any) => (
    <div className='card-list'>
        {props.monsters.map((monster: any) => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);