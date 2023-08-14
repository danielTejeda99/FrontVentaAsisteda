import React from 'react'
import { NavBar, Menu} from '@/ui/components';
import { useAppDispatch } from '@/redux/hooks';
import { setToast } from '@/redux/slices/toastSlice';

interface Props {
    logout: any,
    modules: any,
    children: React.ReactNode
    [x: string]: any;
}



function Dashboard({ logout, modules, children, toast }: Props) {
    const dispatch = useAppDispatch();

    const onCloseToast = () => {
        const dataAux = {
            message: '',
            show: false,
            type: ''
        }
        dispatch(setToast(dataAux))
    }

    return (
        <div>           
            <NavBar handleSignout={logout} modules={[]}  />
            <div className="flex h-screen ">
                <Menu handleSignout={logout} modules={modules} />
                {children}
            </div>
        </div>
    )
}

export default Dashboard;
