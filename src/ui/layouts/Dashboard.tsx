import React from 'react'
import { NavBar, Menu, ToastComponent } from '@/ui/components';
import { connect } from 'react-redux';
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
            {toast.show &&
                <div className="container relative">
                    <div className="centered-div absolute top-1/2 left-1/2 transform -translate-x-1/2 ">
                        <ToastComponent message={toast.message} type={toast.type} close={onCloseToast}/>
                    </div>
                </div>}
            <NavBar />
            <div className="flex h-screen ">
                <Menu handleSignout={logout} modules={modules} />
                {children}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    toast: state.toastReducer
});

export default connect(mapStateToProps)(Dashboard);