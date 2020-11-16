import React, { Component } from 'react'

import { colors, shapes, sizes, types } from './constants'
import {
   InputHint,
   InputLabel,
   LabelAndInputContainer,
   TextInput,
} from './styledComponents'

interface InputProps {
   label: string
   error: boolean
   disabled: boolean
   size: string
   color: string
   shape: string
   fullWidth: boolean
   multiline: boolean
   rows: number
   startIcon: string
   endIcon: string
   onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void
   input: string
   hint: string
   type: string
   placeholder: string
   className: string
}

class Input extends Component<InputProps> {
   static defaultProps = {
      label: '',
      error: false,
      disabled: false,
      size: sizes.medium,
      color: colors.primary,
      shape: shapes.square,
      fullWidth: false,
      multiline: false,
      rows: 0,
      startIcon: '',
      endIcon: '',
      placeholder: 'Enter text',
      onChangeInput: () => {},
      input: '',
      hint: '',
      type: types.text,
      className: '',
   }

   static sizes = sizes
   static colors = colors
   static shapes = shapes
   static types = types

   render() {
      const {
         type,
         input,
         placeholder,
         onChangeInput,
         label,
         hint,
         size,
         shape,
         fullWidth,
         color,
         disabled,
         error,
         ...other
      } = this.props
      return (
         <LabelAndInputContainer>
            <TextInput
               type={type}
               value={input}
               placeholder={placeholder}
               onChange={onChangeInput}
               size={size}
               shape={shape}
               color={color}
               error={error}
               disabled={disabled}
               fullWidth={fullWidth}
               {...other}
            />
            <InputLabel error={error} color={color}>
               {label}
            </InputLabel>
            <InputHint error={error} color={color}>
               {hint}
            </InputHint>
         </LabelAndInputContainer>
      )
   }
}

export default Input
