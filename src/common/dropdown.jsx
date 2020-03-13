import React from 'react';

const DropDown = ({options, value, error, onChange}) => {
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
                {
                    options.map((option, index) => {
                        return  <option key={index} value={index}>{option}</option>
                    })
                }
            </select>
            {error && <div className="alert alert-danger">{ error }</div>}
        </div>
     );
}
 
export default DropDown;