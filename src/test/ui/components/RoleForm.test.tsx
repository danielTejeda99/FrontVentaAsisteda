import '@testing-library/jest-dom/extend-expect';
import { RoleForm } from '@/ui/components'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';

describe('Test para componente RoleForm', () => {
    const permissions = [
        { name: 'Permiso 1', value: 'permiso1' },
        { name: 'Permiso 2', value: 'permiso2' },
    ];
    const onSubmit = jest.fn();
    it('Debe mostrar el componente correctamente', () => {
        render(<RoleForm permissions={permissions} onSubmit={onSubmit} data={null} type="create" />);

        expect(screen.getByLabelText('Nombre del rol')).toBeInTheDocument();
        expect(screen.getByLabelText('Descripción rol')).toBeInTheDocument();
        expect(screen.getByText('Permiso 1')).toBeInTheDocument();
        expect(screen.getByText('Permiso 2')).toBeInTheDocument();
    });

    it('envía el formulario con los valores correctos', async () => {
        const { getByLabelText, getByText } = render(<RoleForm permissions={permissions} onSubmit={onSubmit} data={null} type="create" />);
        act(() => {
            fireEvent.change(getByLabelText('Nombre del rol'), { target: { value: 'Mi Rol' } });
            fireEvent.change(getByLabelText('Descripción rol'), { target: { value: 'Descripción de mi rol' } });
            fireEvent.click(getByLabelText('Permiso 1'));
        });

        // Submit the form
        act(() => {
            fireEvent.click(getByText('Crear Rol'));
        });

        await waitFor(() => {
            const formValues = onSubmit.mock.calls[0][0];
            expect(formValues).toEqual(expect.objectContaining({
                nameRol: 'Mi Rol',
                descriptionRol: 'Descripción de mi rol',
                permissions: ['permiso1'],
                isActive: true,
                id: null,
              }));
        })
    });
});