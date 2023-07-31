import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import {CustomButton} from '@/ui/components';

describe('Test para componente CustomButtons', () => {
    interface Props {
        onClick: Function,
        title: string
    } 

  let onClickMock: jest.Mock;
  let props: Props;
  let component: RenderResult;

  beforeEach(() => {
    onClickMock = jest.fn();
    props = {
      onClick: onClickMock,
      title: 'Test Button',
    };
    component = render(<CustomButton {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Debe representar el botón con el título proporcionado', () => {
    const buttonElement = component.getByText(props.title);
    expect(buttonElement).toBeInTheDocument();
  });

  it('Debe llamar a la función onClick cuando se hace clic en el botón', () => {
    const buttonElement = component.getByText(props.title);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});
