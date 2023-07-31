import { render, screen,act, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  Role  from '@/app/dashboard/role/page';
import { createRol, getRoles, editRol } from '@/request/roles';

const Cookies = {
  get: jest.fn(),
};
jest.mock('@/request/roles', () => ({
  createRol: jest.fn(),
  getRoles: jest.fn(),
  editRol: jest.fn(),
}));

jest.mock('js-cookie', () => ({
  get: jest.fn(),
}));
const token = 'mocked-token';
Cookies.get.mockReturnValue(token);

describe('Role Component', () => {
  
  const mockRoles = [
    { name: 'Rol 1', id: 1 },
    { name: 'Rol 2', id: 2 },
  ];

  beforeEach(() => {
    
    (createRol as jest.Mock).mockClear();
    (createRol as jest.Mock).mockClear();
    (createRol as jest.Mock).mockClear();
    Cookies.get.mockClear();
  });

  it('Debe representar el componente con los campos correctos', () => {
    (getRoles as jest.Mock).mockResolvedValueOnce({ statusCode: 200, data: mockRoles });

    render(<Role />);

    expect(screen.getByLabelText('Nombre del rol')).toBeInTheDocument();
    expect(screen.getByLabelText('Descripción rol')).toBeInTheDocument();
    // Completar las expectativas para el resto de los campos
    expect(screen.getByText('Crear Rol')).toBeInTheDocument();
  });
});
