// components/SettingItem.js
const SettingItem = ({ title, description, action, actionClass = "text-blue-500 hover:text-blue-600" }) => (
    <div className="flex items-center justify-between py-3 border-b">
        <div>
            <h4 className="font-medium text-gray-800">{title}</h4>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button className={`${actionClass} px-3 py-1 rounded-full text-sm font-medium`}>
            {action}
        </button>
    </div>
);

export default SettingItem;
 