import { Form, Formik } from 'formik'
import React from 'react'
import InputComponent from '../../common/Input.component'
import TextAreaComponent from '../../common/textfileld.component'
import { UserInterface } from '../interfaces/user.interface'


export default function CreateUser() {
  return (
    <Formik<Omit<UserInterface, 'id'>>
      initialValues={{
        username: "",
        email: "",
        name: "",
        phone: "",
      }}
      onSubmit={(fields) => {
        console.log({fields});
      }}
    >
      <Form className='block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <InputComponent
            formKey='username'
            type='text'
            placeholder='Enter Username'
            label='Username'
            required={true}
          />
          <InputComponent
            formKey='email'
            type='email'
            placeholder='Enter email'
            label='Email'
            required={true}
          />
          <InputComponent
            formKey='name'
            type='text'
            placeholder='Name'
            label='Enter name'
            required={true}
          />
          <InputComponent
            formKey='phone'
            type='text'
            placeholder='Phone number'
            label='Enter phone number'
            required={true}
          />
          <InputComponent
            formKey='website'
            type='text'
            placeholder='Website url'
            label='Enter website url'
            required={false}
          />
          <TextAreaComponent
            formKey='street'
            placeholder='Street address'
            label='Enter street address'
            required={false}
          />
          <TextAreaComponent
            formKey='suite'
            placeholder='Suite'
            label='Enter suite'
            required={false}
          />
          <InputComponent
            formKey='city'
            type='text'
            placeholder='city'
            label='Enter city'
            required={false}
          />
          <InputComponent
            formKey='zipcode'
            type='text'
            placeholder='zipcode'
            label='Enter zipcode'
            required={false}
          />
        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Submit
        </button>
      </Form>
    </Formik>
  )
}
