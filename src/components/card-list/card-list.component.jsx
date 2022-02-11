//  * React Import
import React from "react";
//  * Styles Import
import './card-list.styles.css'
// * Import Components
import { Card } from '../card/card.component'

export const CardList = (props) => {
    console.log(props)
    return <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
}