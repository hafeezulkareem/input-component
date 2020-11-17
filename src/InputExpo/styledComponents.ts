import tw, { styled } from 'twin.macro'

import {
   Typo12Gray20UbuntuMonoNormal,
   Typo14NotoSansJPMedium,
   Typo24Gray31PoppinsMedium,
} from '../Common/typos'
import Input from '../Input'

export const InputExpoContainer = styled.div`
   ${tw`
        flex flex-col p-32px
    `}
`

export const Header = styled.div`
   ${tw`
        mb-4px
    `}
`

export const PageHeading = styled(Typo24Gray31PoppinsMedium)``

export const InputExpoRow = styled.div`
   ${tw`
      flex flex-wrap mt-24px
   `}
   &:nth-child(2) {
      ${tw`
         mt-0
      `}
   }
`

export const InputAndDescriptionContainer = styled.div`
   ${tw`
      mr-68px mt-24px
    `}
   &:last-child {
      ${tw`
         mr-0
      `}
   }
`

export const FullWidthInputAndDescriptionContainer = styled(
   InputAndDescriptionContainer
)`
   ${tw`
      w-full
   `}
`

export const DefaultDescriptionText = styled(Typo12Gray20UbuntuMonoNormal)``

export const InputContainer = styled.div`
   ${tw`
        mt-12px
    `}
`

export const InputText = styled(Typo14NotoSansJPMedium)``

export const AuthInfo = styled.div`
   ${tw`
      mt-24px
   `}
`

export const Link = styled.a`
   ${tw`
      text-darkGray hover:text-royalBlue no-underline
   `}
`

export const DevChallengesSiteLink = styled(Link)`
   ${tw`
      ml-8px
   `}
`

export const CustomInput = styled(Input)`
   ${tw`
      p-12px rounded-8px shadow focus:bg-darkGray10 focus:border-darkGray
   `}
`
