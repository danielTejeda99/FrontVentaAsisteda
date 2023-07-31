import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { UserForm } from '@/ui/components';
import MyFormik from '@/ui/components/MyFormik'; // Asegúrate de importar correctamente el componente MyFormik

describe('UserForm', () => {
    const onSubmit = jest.fn();
    const roles = [
        { name: 'Rol 1', value: 'rol1' },
        { name: 'Rol 2', value: 'rol2' },
    ];

    it('should render the form with correct fields', () => {
        render(<UserForm onSubmit={onSubmit} roles={roles} />);

        expect(screen.getByLabelText('Nombres')).toBeInTheDocument();
        expect(screen.getByLabelText('Apellidos')).toBeInTheDocument();
        expect(screen.getByLabelText('N° documento')).toBeInTheDocument();
        expect(screen.getByLabelText('Dirección de residencia')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
        expect(screen.getByLabelText('Tipo documento')).toBeInTheDocument();
        expect(screen.getByLabelText('Rol del usuario')).toBeInTheDocument();

        expect(screen.getByText('Crear usuario')).toBeInTheDocument();
    });

    it('envía el formulario con los valores correctos', async () => {
        const { getByLabelText, getByText } = render(<UserForm onSubmit={onSubmit} roles={roles} />);
        act(() => {
            fireEvent.change(getByLabelText('Nombres'), { target: { value: 'John' } });
            fireEvent.change(getByLabelText('Apellidos'), { target: { value: 'Doe' } });
            fireEvent.change(getByLabelText('N° documento'), { target: { value: '123' } });
            fireEvent.change(getByLabelText('Dirección de residencia'), { target: { value: 'test' } });
            fireEvent.change(getByLabelText('Correo electrónico'), { target: { value: 'test@test.com' } });
            fireEvent.change(getByLabelText('Teléfono'), { target: { value: '1322' } });
            fireEvent.change(getByLabelText('Tipo documento'), { target: { value: 'cc' } });
            fireEvent.change(getByLabelText('Rol del usuario'), { target: { value: '1' } });
        });

        // Submit the form
        act(() => {
            fireEvent.click(getByText('Crear usuario'));
        });

        await waitFor(() => {
            const formValues = onSubmit.mock.calls[0][0];
            expect(formValues).toEqual(expect.objectContaining({ "address": "test", "email": "test@test.com", "id": "123", "lastName": "Doe", "name": "John", "number": "1322", "roleId": "", "typeId": "" }));
        });
    });
});
