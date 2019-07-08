import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', tpe: 'salad'},
    { label: 'Bacon', tpe: 'bacon'},
    { label: 'Cheese', tpe: 'cheese'},
    { label: 'Meat', tpe: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label} />
        })}
    </div>
);

export default buildControls;