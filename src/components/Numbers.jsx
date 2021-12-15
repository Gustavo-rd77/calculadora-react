import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
//DRY : Don't repeat yourself
const numbers =[1,2,3,4,5,6,7,8,9,0];
const renderButtons = (onClickNumber)=>{

   let buttonArray = numbers.map(element => <Button key={element} text={element.toString()} clickHandler={onClickNumber}/>);
    return buttonArray;

}
const Numbers = ({onClickNumber})=> {
    return(
        <section className="numbers">
            {
                renderButtons(onClickNumber)
            }
        </section>


    );
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;