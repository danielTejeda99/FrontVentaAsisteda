import React, { useState } from 'react';
import Select from 'react-select'

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const MultiSelect = ({ label, options,onChange,defaultValue, ...props }: Props) => {
   

    return (
        <div className='flex flex-col'>
            {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto  text-sm"}>{label}</label>}
            <div className='inline w-full'>
                <Select
                    isMulti
                    id="aliados"
                    name="aliados"
                    options={options}
                    className="basic-multi-select border border-gray-300  rounded-xl focus:border-c2 focus:ring-c2 w-full h-[36px]"
                    classNamePrefix="select"
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
        </div>

    );
}

export default MultiSelect;

