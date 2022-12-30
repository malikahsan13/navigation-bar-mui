import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({btnText, btnVariant, btnStyle}) => {
  return (
    <>
      <Button size='md' variant={btnVariant} sx={btnStyle}>{btnText}</Button>
    </>
  )
}

export default CustomButton
