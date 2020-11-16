import tw, { styled, TwStyle } from 'twin.macro'

import { Typo10NotoSansJPMedium, Typo12NotoSansJPMedium } from '../Common/typos'

import { shapes, sizes } from './constants'
import { getColor } from './utils'

const getShapeStyles = (shape: string): TwStyle => {
   switch (shape) {
      case shapes.rectangle:
         return tw`rounded-0`
      case shapes.square:
         return tw`rounded-4px`
      default:
         return tw`rounded-4px`
   }
}

const getSizeStyles = (size: string) => {
   switch (size) {
      case sizes.small:
         return tw`py-4px px-8px`
      case sizes.medium:
         return tw`py-8px px-12px`
      case sizes.large:
         return tw`py-12px px-16px`
      default:
         return tw`py-8px px-12px`
   }
}

// const getColorStyles = (color: string) => {
//    switch (color) {
//       case colors.default:
//          return tw`focus:border-royalBlue`
//       case colors.primary:
//          return tw`focus:border-royalBlue`
//       case colors.secondary:
//          return tw`focus:border-eclipse`
//       case colors.warning:
//          return tw`focus:border-ecstasy`
//       case colors.success:
//          return tw`focus:border-salem`
//       case colors.danger:
//          return tw`focus:border-persianRed`
//       default:
//          return tw`focus:border-royalBlue`
//    }
// }

export const LabelAndInputContainer = styled.div``

export const InputLabel = styled(Typo12NotoSansJPMedium)(({ error, color }) => [
   tw`text-${getColor(color)}`,
   error ? tw`text-persianRed` : tw``,
])

export const TextInput = styled.input(
   ({ error, shape, size, color, disabled }) => [
      tw`w-full mt-4px border border-solid border-gray20`,
      getShapeStyles(shape),
      getSizeStyles(size),
      tw`focus:border-${getColor(color)}`,
      error ? tw`focus:border-persianRed` : tw``,
      disabled
         ? tw`cursor-not-allowed border-gainsboro bg-concrete`
         : tw`cursor-pointer`,
   ]
)

export const InputHint = styled(Typo10NotoSansJPMedium)(({ error, color }) => [
   tw`mt-4px text-${getColor(color)}`,
   error ? tw`text-persianRed` : tw``,
])
