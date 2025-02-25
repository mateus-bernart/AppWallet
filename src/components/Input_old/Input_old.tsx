import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Text} from 'react-native-gesture-handler';

import {Container, IConContainer, InputText} from './styles';
import {TextInputProps} from 'react-native';
import {Mail} from 'lucide-react-native';
import {useField} from '@unform/core';

interface InputRef {
  focus(): void;
}

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name: string;
  value?: string;
  containerStyle?: {[key: string]: string | number};
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {name, value, containerStyle, ...rest},
  ref,
) => {
  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {registerField, fieldName, defaultValue = '', error} = useField(name);

  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    setHasError(!!error);
  }, [error]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setHasError(false);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        (inputValueRef.current.value = value),
          inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        (inputValueRef.current.value = ''), inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container style={containerStyle}>
      <IConContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}>
        <Mail
          color={isFocused || hasError || isFilled ? 'blue' : 'dimgray'}
          size={25}
        />
      </IConContainer>
      <InputText
        ref={inputElementRef}
        onFocus={handleFocus}
        onBlue={handleBlur}
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
        defaultValue={defaultValue}
        onchangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
