import React, { useState } from 'react';
import Select from 'react-select'

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const MultiSelect = ({ label, options,onChange,defaultValue, ...props }: Props) => {
   

    return (
        <div className='flex flex-col'>
            {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto"}>{label}</label>}
            <div className='inline w-full'>
                <Select
                    isMulti
                    id="aliados"
                    name="aliados"
                    options={options}
                    className="basic-multi-select w-full" 
                    classNamePrefix="select"
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
        </div>

    );
}

export default MultiSelect;

