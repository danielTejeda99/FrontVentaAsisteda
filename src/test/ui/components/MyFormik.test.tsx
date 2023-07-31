import '@testing-library/jest-dom/extend-expect';
import { MyFormik, TextInput } from '@/ui/components'
import { Form } from 'formik'
import { render, screen, fireEvent } from '@testing-library/react';

describe('Test para componente MyFormik', () => {
    it('Debe mostrar el formulario que recibe por props', () => {
        const initialValues = {
            name: '',
            age: 0,
        };
        const form = (
            <Form>
                <TextInput
                    label="name"
                    name="name"
                />
                <TextInput
                    label="age"
                    name="age"
                />
            </Form>
        );

        const validation = [
            { name: 'name', type: 'string', required: true },
            { name: 'age', type: 'number', required: true }
        ];

        render(<MyFormik initialValues={initialValues}
            onSubmit={() => { }}
            form={form}
            validation={validation} />);
        expect(screen.getByLabelText('name')).toBeInTheDocument();
        expect(screen.getByLabelText('age')).toBeInTheDocument();
    })
})