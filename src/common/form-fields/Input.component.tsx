import React from 'react'
import { Controller } from "react-hook-form";
export interface Props {
    control: any;
    formKey: string;
    type: string;
    placeholder: string;
    label: string;
    required: boolean;
}

const normalClassString = "bg-gray-50 \
border border-gray-300 \
text-gray-900 text-sm rounded-lg focus:ring-blue-500 \
focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const touchedClassString = "bg-gray-50 \
border border-green-500 \
text-green-900 text-sm rounded-lg focus:ring-geen-500 \
focus:border-green-700 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


const dirtyClassString = "bg-red-50 \
border border-red-500 \
text-red-900 text-sm rounded-lg focus:ring-geen-500 \
focus:border-red-700 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const InputComponent: React.FC<Props> = (props: Props) => {
    const { type, label, placeholder, formKey, control } = props;
    return <Controller
    control={control}
    name={formKey}
    render={({
      field,
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
        <div className='mx-4 my-4'>
        <label htmlFor={`id$${formKey}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        <input
            type={type}
            id={`id$${formKey}`}
            className={isTouched ? error ? dirtyClassString : touchedClassString : normalClassString}
            placeholder={placeholder}
            {...field}
            />
        {
            isTouched && error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.message}</p>
            )
        }
    </div>
    )}
  />
};

export default InputComponent;
