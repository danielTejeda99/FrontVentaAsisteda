import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  CustomModal  from '@/ui/modals'

describe('Test para componente CustomModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    onClose: onCloseMock,
    title: 'Test title',
    description: 'Test description',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Mostrar modal con mensaje', () => {
    const { getByText } = render(<CustomModal {...props} />);
    const titleElement = getByText(props.title);
    const descriptionElement = getByText(props.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  
});
