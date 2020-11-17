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

const getSizeStyles = (size: string) => {
   switch (size) {
      case sizes.small:
         return tw`p-8px`
      case sizes.medium:
         return tw`p-12px`
      case sizes.large:
         return tw`p-20px`
      default:
         return tw`p-12px`
   }
}

const getInputColorStyles = (color: string) => {
   switch (color) {
      case colors.default:
         return tw`focus:border-royalBlue`
      case colors.primary:
         return tw`focus:border-royalBlue`
      case colors.secondary:
         return tw`focus:border-eclipse`
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
         return tw`text-eclipse`
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

export const TextInput = styled.input(
   ({ error, size, shape, color, disabled, fullWidth }) => [
      tw`mt-8px border border-solid border-gray20 outline-none`,
      getShapeStyles(shape),
      getSizeStyles(size),
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
