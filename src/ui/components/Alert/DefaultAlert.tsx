'use client';

import {Alert} from 'flowbite-react';


interface Props {
    [x: string]: any;
}


export default function DefaultAlert({type, message}: Props) {
    return (
        <Alert color={type}>
      <span>
          <span className="font-medium">
            Alerta!
          </span>
        <p>
             {message}
        </p>
      </span>
        </Alert>
    )
}


