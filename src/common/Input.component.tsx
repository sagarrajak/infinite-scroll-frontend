import { useField } from 'formik';
import React from 'react'
export interface Props {
    formKey: string;
    type: string;
    placeholder: string;
    label: string;
    required: boolean;
}

export default function InputComponent(props: Props) {
    const { type, label, placeholder, required, formKey } = props;
    const [field, meta] = useField(props.formKey);
    const { touched, error } = meta;

    return (
        <div className='mx-4 my-4'>
            <label htmlFor={`id$${formKey}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            <input
                type={type}
                id={`id$${formKey}`} 
                {...field}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder={placeholder} required={required} />
            {
                touched && error && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
                )
            }
        </div>
    )
}