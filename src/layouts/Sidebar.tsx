import { FC } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
const Sidebar: FC = () => {

    return <aside className="relative bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-4 mb-8">
            <a href="" className="text-white text-cener text-2xl font-semibold uppercase hover:text-gray-300">Super Admin</a>
            
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 bg-blue-800">

            <span className="text-white mr-2"><GroupIcon/></span>

                Managers
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 ">
            <span className="text-white mr-2"><StackedLineChartIcon/></span>
            
                Statistics
            </a>
        </nav>

    </aside>
;
};

export default Sidebar;
