import { colors } from './constants'

export const getColor = (color: string) => {
   switch (color) {
      case colors.default:
         return `royalBlue`
      case colors.primary:
         return `royalBlue`
      case colors.secondary:
         return `eclipse`
      case colors.warning:
         return `ecstasy`
      case colors.success:
         return `salem`
      case colors.danger:
         return `persianRed`
      default:
         return `royalBlue`
   }
}
