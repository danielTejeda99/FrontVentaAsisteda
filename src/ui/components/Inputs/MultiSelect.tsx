import React, { useState } from 'react';
import Select from 'react-select'

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const MultiSelect = ({ label, options,onChange,defaultValue, ...props }: Props) => {
   

    return (
        <div className='flex '>
            {/* {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold mr-3 inline w-15"}>{label}</label>} */}
            <div className='inline flex flex-col w-85'>
                <Select
                    isMulti
                    id="aliados"
                    name="aliados"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
        </div>

    );
}

export default MultiSelect;

