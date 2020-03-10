import React from 'react';

const DropDown = ({option1, option2, option3, value, onChange}) => {
    return ( 
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
            </div>
            <select
                className="custom-select"
                id="inputGroupSelect01"
                value={value}
                onChange={onChange}
            >
                <option value="0">Choose...</option>
                <option value="1">{option1}</option>
                <option value="2">{option2}</option>
                <option value="3">{option3}</option>
            </select>
        </div>
     );
}
 
export default DropDown;