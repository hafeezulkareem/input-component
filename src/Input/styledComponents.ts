import tw, { styled, TwStyle } from 'twin.macro'

import { Typo10NotoSansJPMedium, Typo12NotoSansJPMedium } from '../Common/typos'

import { colors, shapes, sizes } from './constants'

const getShapeStyles = (shape: string): TwStyle => {
   switch (shape) {
      case shapes.rectangle:
         return tw`rounded-none`
      case shapes.square:
         return tw`rounded-4px`
      default:
         return tw`rounded-4px`
   }
}

const getSizeStyles = (size: string, startIcon: string, endIcon: string) => {
   switch (size) {
      case sizes.small:
         return startIcon
            ? tw`p-8px pl-32px`
            : endIcon
            ? tw`p-8px pr-32px`
            : tw`p-8px`
      case sizes.medium:
         return startIcon
            ? tw`p-12px pl-36px`
            : endIcon
            ? tw`p-12px pr-36px`
            : tw`p-12px`
      case sizes.large:
         return startIcon
            ? tw`p-20px pl-44px`
            : endIcon
            ? tw`p-20px pr-44px`
            : tw`p-20px`
      default:
         return startIcon
            ? tw`p-12px pl-36px`
            : endIcon
            ? tw`p-12px pr-36px`
            : tw`p-12px`
   }
}

const getInputColorStyles = (color: string) => {
   switch (color) {
      case colors.default:
         return tw`focus:border-royalBlue`
      case colors.primary:
         return tw`focus:border-royalBlue`
      case colors.secondary:
         return tw`focus:border-gray3`
      case colors.warning:
         return tw`focus:border-ecstasy`
      case colors.success:
         return tw`focus:border-salem`
      case colors.danger:
         return tw`focus:border-persianRed`
      default:
         return tw`focus:border-royalBlue`
   }
}

const getTextColorStyles = (color: string, error: boolean) => {
   if (error) {
      return tw`text-persianRed`
   }
   switch (color) {
      case colors.default:
         return tw`text-royalBlue`
      case colors.primary:
         return tw`text-royalBlue`
      case colors.secondary:
         return tw`text-gray3`
      case colors.warning:
         return tw`text-ecstasy`
      case colors.success:
         return tw`text-salem`
      case colors.danger:
         return tw`text-persianRed`
      default:
         return tw`text-royalBlue`
   }
}

export const LabelAndInputContainer = styled.div`
   ${tw`
      w-full flex flex-col
   `}
`

export const InputLabel = styled(
   Typo12NotoSansJPMedium
)(({ error, color, hasFocused }) => [
   hasFocused && getTextColorStyles(color, error),
   error && tw`text-persianRed`,
])

export const InputContainer = styled.div`
   ${tw`
      flex items-center relative
   `}
`
const IconContainer = styled.div`
   ${tw`
      mt-8px absolute
   `}
`

export const StartIconContainer = styled(IconContainer)`
   left: 8px;
`

export const EndIconContainer = styled(IconContainer)`
   right: 8px;
`

export const Icon = styled.i``

export const TextInput = styled.input(
   ({ error, size, shape, color, disabled, fullWidth, startIcon, endIcon }) => [
      tw`mt-8px border border-solid border-gray20 outline-none`,
      getShapeStyles(shape),
      getSizeStyles(size, startIcon, endIcon),
      getInputColorStyles(color),
      error && tw`border-persianRed focus:border-persianRed`,
      disabled
         ? tw`cursor-not-allowed border-gainsboro bg-concrete`
         : tw`cursor-auto`,
      fullWidth ? tw`` : tw`w-maxContent`,
   ]
)

export const TextArea = styled.textarea(
   ({ error, size, shape, color, disabled, fullWidth, startIcon, endIcon }) => [
      tw`mt-8px border border-solid border-gray20 outline-none resize-none`,
      getShapeStyles(shape),
      getSizeStyles(size, startIcon, endIcon),
      getInputColorStyles(color),
      error && tw`border-persianRed focus:border-persianRed`,
      disabled
         ? tw`cursor-not-allowed border-gainsboro bg-concrete`
         : tw`cursor-auto`,
      fullWidth ? tw`` : tw`w-maxContent`,
   ]
)

export const InputHint = styled(
   Typo10NotoSansJPMedium
)(({ error, color, hasFocused }) => [
   tw`mt-8px`,
   hasFocused && getTextColorStyles(color, error),
   error && tw`text-persianRed`,
])
