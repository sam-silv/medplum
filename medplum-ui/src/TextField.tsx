import React, { RefObject } from 'react';
import './TextField.css';

export interface TextFieldProps {
  id?: string;
  type?: string;
  size?: 'small' | 'medium' | 'large';
  value?: string;
  required?: boolean;
  autoFocus?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent) => void;
}

export const TextField = (props: TextFieldProps) => {
  const className = '';
  return (
    <input
      id={props.id}
      name={props.id}
      type={props.type || 'text'}
      className={className}
      defaultValue={props.value || ''}
      required={props.required}
      autoFocus={props.autoFocus}
      ref={props.inputRef}
      onChange={props.onChange}
    />
  );
};
