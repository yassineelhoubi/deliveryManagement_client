
import { Outlet } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar'
const dashboard = () => {
    return <div>
        <div>
            <Sidebar />

            <div>
                <Outlet />
            </div>
        </div>
    </div>
        ;
};

export default dashboard;
