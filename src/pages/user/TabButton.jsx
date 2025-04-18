  
const TabButton = ({ name, icon: Icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-4 py-3 rounded-md text-left transition duration-300 ease-in-out ${isActive
            ? 'bg-blue-50 text-blue-600 font-medium'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
    >
        <Icon className="w-5 h-5 mr-3" />
        {name}
    </button>
);

export default TabButton;
