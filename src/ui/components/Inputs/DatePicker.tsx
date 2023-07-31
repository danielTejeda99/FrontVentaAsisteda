import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const DatePickerComponent = ({ label,selectedDate,handleDateChange, ...props }: Props) => {
    

    return (
        <div className='flex '>
            {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold mr-3 inline w-15"}>{label}</label>}
            <div className='inline flex flex-col w-85'>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="input input-bordered"
                    placeholderText="Select date"
                />
            </div>
        </div>

    );
}

export default DatePickerComponent;

