'use client';

import { Toast } from 'flowbite-react';
import { HiCheck, HiX  } from 'react-icons/hi'

interface Props {
    message: string;
    type: string;
    close:any
}
export default function ToastComponent({message, type,close}: Props) {
  return (    
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          {type === 'success' ? <HiCheck className="h-5 w-5" /> : <HiX className="h-5 w-5" />}
        </div>
        <div className="ml-3 text-sm font-normal">
          {message}
        </div>
        <Toast.Toggle onClick={close}/>
      </Toast>      
  )
}


