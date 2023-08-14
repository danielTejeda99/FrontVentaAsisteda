import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    [x: string]: any; // Otras propiedades opcionales.
}

const DatePickerComponent = ({ label,selectedDate,handleDateChange, ...props }: Props) => {
    const today = new Date();
    return (
        <div className='flex flex-col'>
            {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto text-sm mb-3"}>{label}</label>}
            <div className='flex flex-col w-full'>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="input input-bordered w-full rounded-xl border-gray-300 focus:border-c2 focus:ring-c2 h-[36px]"
                    placeholderText="Seleccionar fecha de ingreso"
                    maxDate={props.block ? today : null}
                />
            </div>
        </div>

    );
}

export default DatePickerComponent;

