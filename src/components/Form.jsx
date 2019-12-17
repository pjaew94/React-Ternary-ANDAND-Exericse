import React from "react";
import Input from './Input'
import Button from './Button'

function FormUnregistered() {
  return (
    <form className="form">
      <Input type='text' placeholder='Username' />
      <Input type='password' placeholder='Password' />
      <Input type='password' placeholder='Confirm Password' />
      <Button button='Register'/>
    </form>
  );
}

function FormRegistered() {
  return (
    <form className="form">
      <Input type='text' placeholder='Username' />
      <Input type='password' placeholder='Password' />
      <Button button='Login'/>
    </form>
  )
}

export default FormUnregistered;
export {FormRegistered}
