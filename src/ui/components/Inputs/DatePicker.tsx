import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const DatePickerComponent = ({ label,selectedDate,handleDateChange, ...props }: Props) => {
    const today = new Date();
    return (
        <div className='flex '>
            {/* {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold mr-3 inline w-30"}>{label}</label>} */}
            <div className='inline flex flex-col '>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="input input-bordered"
                    placeholderText="Select date"
                    maxDate={props.block ? today : null}
                />
            </div>
        </div>

    );
}

export default DatePickerComponent;

