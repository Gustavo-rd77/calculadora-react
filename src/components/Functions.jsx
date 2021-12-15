import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Functions = ({onContentClear, onDelete})=>{
    return(
        <section className="function">
            <Button  type="button-long-text" text="clear" clickHandler={onContentClear}/>
            <Button text="&larr;" clickHandler={onDelete}/>
        </section>

    );
}

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete:       PropTypes.func.isRequired
}
export default Functions;