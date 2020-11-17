import React, { Component, ReactNode } from 'react'

import { colors, shapes, sizes, types } from './constants'
import {
   InputHint,
   InputLabel,
   LabelAndInputContainer,
   TextArea,
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
   state = {
      hasFocused: false,
   }

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

   onFocus = (): void => {
      this.setState({ hasFocused: true })
   }

   onBlur = (): void => {
      this.setState({ hasFocused: false })
   }

   renderInputOrTextArea = (): ReactNode => {
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
         multiline,
         rows,
         className,
         ...other
      } = this.props
      return multiline ? (
         <TextArea
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
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={className}
            rows={rows}
            {...other}
         />
      ) : (
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
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={className}
            {...other}
         />
      )
   }

   render() {
      const { label, hint, color, error } = this.props
      const { hasFocused } = this.state
      return (
         <LabelAndInputContainer>
            <InputLabel error={error} color={color} hasFocused={hasFocused}>
               {label}
            </InputLabel>
            {this.renderInputOrTextArea()}
            <InputHint error={error} color={color} hasFocused={hasFocused}>
               {hint}
            </InputHint>
         </LabelAndInputContainer>
      )
   }
}

export default Input
