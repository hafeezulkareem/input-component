import React, { Component } from 'react'

import { colors, shapes, sizes, types } from './constants'
import { TextInput } from './styledComponents'

interface InputProps {
   label: string
   error: boolean
   disabled: boolean
   size: string
   color: string
   shape: string
   multiline: boolean
   rows: number
   startIcon: string
   endIcon: string
   onChangeInput: (updatedInput: string) => void
   input: string
   type: string
   placeholder: string
   className: string
}

class Input extends Component<InputProps> {
   defaultProps = {
      label: '',
      error: false,
      disabled: false,
      size: sizes.medium,
      color: colors.primary,
      shape: shapes.square,
      multiline: false,
      rows: 0,
      startIcon: '',
      endIcon: '',
      placeholder: 'Enter text',
      onChangeInput: () => {},
      input: '',
      type: types.text,
      className: '',
   }

   static sizes = sizes
   static colors = colors
   static shapes = shapes
   static types = types

   render() {
      const { input, placeholder, ...other } = this.props
      return <TextInput {...other} />
   }
}

export default Input
