import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';
const MathOperation = ({onClickOperation, onclickEqual}) => {
    return (
        <section className="math-operations">
            <Button text="+" clickHandler = {onClickOperation}/>
            <Button text="-" clickHandler = {onClickOperation}/>
            <Button text="*" clickHandler = {onClickOperation}/>
            <Button text="/" clickHandler = {onClickOperation}/>
            <Button text="=" clickHandler = {onclickEqual}/>
        </section>

    )
}

MathOperation.protoTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
}

export default MathOperation;