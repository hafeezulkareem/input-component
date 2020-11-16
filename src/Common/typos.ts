import tw, { styled } from 'twin.macro'

/* Poppins Font Styled Components */
const BasePoppinsText = styled.span`
   ${tw`font-poppins`}
`

const BasePoppinsMediumText = styled(BasePoppinsText)`
   ${tw`font-medium`}
`

export const Typo24Gray31PoppinsMedium = styled(BasePoppinsMediumText)`
   ${tw`text-24px text-gray31`}
`

/* Ubuntu Mono Styled Components */
const BaseUbuntuMonoText = styled.span`
   ${tw`font-ubuntuMono`}
`

export const Typo12Gray20UbuntuMonoNormal = styled(BaseUbuntuMonoText)`
   ${tw`text-12px text-gray20`}
`

/* Noto Sans JP Mono Styled Components */
const BaseNotoSansJPText = styled.span`
   ${tw`font-notoSansJP`}
`

const BaseNotoSansJPMediumText = styled(BaseNotoSansJPText)`
   ${tw`font-medium`}
`

export const Typo14NotoSansJPMedium = styled(BaseNotoSansJPMediumText)`
   ${tw`text-14px`}
`
