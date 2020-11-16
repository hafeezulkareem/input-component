import React, { Component, ReactNode } from 'react'

import Input from '../Input'

import {
   AuthInfo,
   DefaultDescriptionText,
   DevChallengesSiteLink,
   FullWidthInputAndDescriptionContainer,
   Header,
   InputAndDescriptionContainer,
   InputContainer,
   InputExpoContainer,
   InputExpoRow,
   Link,
   PageHeading,
} from './styledComponents'

class InputExpo extends Component {
   state = {
      inputValue: '',
   }

   onChangeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({ inputValue: event.currentTarget.value.trim() })
   }

   renderFirstRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input size={SMALL} />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     hint='Something for hint'
                     size={Input.sizes.small}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input size={MEDIUM} />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     hint='Something for hint'
                     size={Input.sizes.medium}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input size={LARGE} />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     hint='Something for hint'
                     size={Input.sizes.large}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderSecondRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input disabled />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     disabled
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderThirdRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input error />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     hint='Something for hint'
                     error
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderFourthRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <FullWidthInputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input fullWidth />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.success}
                     fullWidth
                  />
               </InputContainer>
            </FullWidthInputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   render() {
      return (
         <InputExpoContainer>
            <Header>
               <PageHeading>Input</PageHeading>
            </Header>
            {this.renderFirstRow()}
            {this.renderSecondRow()}
            {this.renderThirdRow()}
            {this.renderFourthRow()}
            <AuthInfo>
               <Link href='https://devchallenges.io/profile/dkgdYnckKaYN3fT89MSt'>
                  Hafeezul Kareem Shaik
               </Link>
               <DevChallengesSiteLink href='https://devchallenges.io/'>
                  @DevChallenges
               </DevChallengesSiteLink>
            </AuthInfo>
         </InputExpoContainer>
      )
   }
}

export default InputExpo
