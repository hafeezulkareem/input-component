import React, { Component, ReactNode } from 'react'

import Input from '../Input'

import {
   AuthInfo,
   CustomInput,
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
                     fullWidth
                  />
               </InputContainer>
            </FullWidthInputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderFifthRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="DEFAULT" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.default}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="PRIMARY" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.primary}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="SECONDARY" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.secondary}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="WARNING" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.warning}
                     fullWidth
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="DANGER" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     color={Input.colors.danger}
                     fullWidth
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input color="SUCCESS" />'}
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
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderSixthRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input shape="RECTANGLE"/>'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     shape={Input.shapes.rectangle}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input shape="SQUARE" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     shape={Input.shapes.square}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderCustomInput = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<CustomInput />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <CustomInput
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
         </InputExpoRow>
      )
   }

   renderSeventhRow = (): ReactNode => {
      return (
         <InputExpoRow>
            <InputAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Input multiline row="5" />'}
               </DefaultDescriptionText>
               <InputContainer>
                  <Input
                     input={this.state.inputValue}
                     onChangeInput={this.onChangeInputValue}
                     label='Label'
                     multiline
                     rows={5}
                  />
               </InputContainer>
            </InputAndDescriptionContainer>
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
            {this.renderFifthRow()}
            {this.renderSixthRow()}
            {this.renderSeventhRow()}
            {this.renderCustomInput()}
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
