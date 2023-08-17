import React from 'react'
import { NavBar, Menu} from '@/ui/components';

interface Props {
    logout: any,
    modules: any,
    children: React.ReactNode
    [x: string]: any;
}



function Dashboard({ logout, modules, children, toast }: Props) {

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
