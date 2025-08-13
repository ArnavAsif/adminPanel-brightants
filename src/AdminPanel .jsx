import { FiHome, FiUsers, FiSettings, FiPieChart, FiShoppingBag, FiMail, FiCalendar, FiLogOut } from 'react-icons/fi';
import { FaBars, FaTimes, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from './auth/AuthProvider ';

const AdminPanel = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Dashboard');
    const { logout } = useAuth();

    const menuItems = [
        { name: 'Dashboard', icon: <FiHome /> },
        { name: 'Users', icon: <FiUsers /> },
        { name: 'Products', icon: <FiShoppingBag /> },
        { name: 'Analytics', icon: <FiPieChart /> },
        { name: 'Messages', icon: <FiMail /> },
        { name: 'Calendar', icon: <FiCalendar /> },
        { name: 'Settings', icon: <FiSettings /> },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-indigo-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="flex items-center justify-between p-4 border-b border-indigo-700">
                    {sidebarOpen ? (
                        <h1 className="text-xl font-bold">Admin Panel</h1>
                    ) : (
                        <h1 className="text-xl font-bold">AP</h1>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-1 rounded-lg hover:bg-indigo-700"
                    >
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <nav className="mt-6">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <button
                                    onClick={() => setActiveItem(item.name)}
                                    className={`flex items-center w-full p-3 transition-colors duration-200 ${activeItem === item.name ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {sidebarOpen && (
                                        <span className="ml-3">{item.name}</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-700">
                    <button
                        onClick={logout}
                        className="flex items-center w-full p-3 hover:bg-indigo-700 rounded-lg"
                    >
                        <FiLogOut />
                        {sidebarOpen && <span className="ml-3">Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
                            <FaSearch className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none w-full"
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 rounded-full hover:bg-gray-100">
                                <FaBell className="text-gray-600" />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>

                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <FaUserCircle className="text-indigo-600 text-xl" />
                                </div>
                                <span className="ml-2 font-medium">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">{activeItem}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {/* Stats Cards */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500">Total Users</p>
                                    <h3 className="text-2xl font-bold">1,234</h3>
                                </div>
                                <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                                    <FiUsers size={24} />
                                </div>
                            </div>
                            <p className="text-green-500 mt-2 text-sm">+12% from last month</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500">Total Revenue</p>
                                    <h3 className="text-2xl font-bold">$12,345</h3>
                                </div>
                                <div className="p-3 rounded-full bg-green-100 text-green-600">
                                    <FiPieChart size={24} />
                                </div>
                            </div>
                            <p className="text-green-500 mt-2 text-sm">+8% from last month</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500">Pending Orders</p>
                                    <h3 className="text-2xl font-bold">56</h3>
                                </div>
                                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                    <FiShoppingBag size={24} />
                                </div>
                            </div>
                            <p className="text-red-500 mt-2 text-sm">-3% from last month</p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Recent Activity</h3>
                            <button className="text-indigo-600 hover:text-indigo-800">View All</button>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                                    <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                                        <FiUsers />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">New user registered</p>
                                        <p className="text-gray-500 text-sm">User #{item}234 has registered</p>
                                    </div>
                                    <span className="text-gray-400 text-sm">2 hours ago</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;