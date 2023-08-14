'use client'
import { Component, useEffect, useState } from 'react'
import '@/styles/globals.css'
import { signout } from '@/request/auth';
import { useRouter } from 'next/navigation';
import CookiesUtils from '@/utils/cookieUtils';
import Dashboard from '@/ui/layouts/Dashboard';
import { HiUsers, HiShoppingBag } from 'react-icons/hi';
import { FaNetworkWired } from 'react-icons/fa';

interface Module {
  id: number;
  description: string;
  path?: string;
  children: object[];
  icon?: any
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [modules, setModules] = useState<Module[]>([])

  const logout = async () => {
    const response = await signout();
    if (response.statusCode === 200) {
      const { data } = response;
      Object.keys(CookiesUtils.getAllCookie()).forEach((cookieName) => {
        CookiesUtils.removeCookie(cookieName);
      });
      localStorage.clear();
      router.push(data);
    }
  }

  const filterModules = (userModules: any[]): Module[] => {
    const filteredModules: Module[] = [];

    for (const item of userModules) {
      if (item.permissions) {
        for (const iterator of item.permissions) {
          switch (iterator.description) {
            case 'crear usuario':
              const exists = filteredModules.some((item) => item.id === 1);
              if (exists) {
                for (const child of filteredModules) {
                  if (child.id === 1) {
                    child.children.push({
                      description: 'Crear usuarios',
                      path: '/dashboard/user',
                    })
                  }
                }
              } else {
                filteredModules.push({
                  id: 1,
                  description: 'GESTIÓN DE USUARIOS',
                  icon: HiUsers,
                  children: [
                    {
                      description: 'Crear usuarios',
                      path: '/dashboard/user',
                    }
                  ],

                });
              }

              break;
            case 'actualizar usuario':
              const existsUser = filteredModules.some((item) => item.id === 1);
              if (existsUser) {
                for (const child of filteredModules) {
                  if (child.id === 1) {
                    child.children.push({
                      description: 'Editar usuarios',
                      path: '/dashboard/user/edit',
                    })
                  }
                }
              } else {
                filteredModules.push({
                  id: 1,
                  description: 'Usuarios',
                  children: [
                    {
                      description: 'Actualizar Usuarios',
                      path: '/dashboard/user/edit',
                    }
                  ],

                });
              }
              break;
          }

          if (iterator.description === 'crear rol' || iterator.description === 'actualizar rol') {
            const exists = filteredModules.some((item) => item.id === 3);
            if (!exists) {
              filteredModules.push({
                id: 3,
                description: 'GESTIÓN DE ROLES',
                children: [
                  {
                    description: 'Crear y editar roles',
                    path: '/dashboard/role',
                  }
                ],
                icon: FaNetworkWired
              });
            }
          }
        }
      }
    }

    //TODO: asociar a los permisos del usuario
    filteredModules.push({
      id: 4,
      description: 'GESTIÓN DE PRODUCTOS',
      icon: HiShoppingBag,
      children: [
        {
          description: 'Agregar productos',
          path: '/dashboard/products',
        },
        {
          description: 'Editar productos',
          path: '/dashboard/user',
        },
        {
          description: 'Productos disponibles',
          path: '/dashboard/user',
        }
      ],

    });

    return filteredModules;
  };

  useEffect(() => {
    const user: any = CookiesUtils.getCookie('user');
    if (user) {
      const userJson = JSON.parse(user);
      const filteredModules = filterModules(userJson.modules);
      setModules(filteredModules);
    }
  }, [])


  return (
    <Dashboard logout={logout} modules={modules}>
      <div className='w-full overflow-y-scroll h-90'>
        {children}
      </div>
      {/* {children} */}
    </Dashboard>
  )
}
