import { Pencil } from 'lucide-react';

const Section = ({ title, children, onEdit }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            {onEdit && (
                <button className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out flex items-center">
                    <Pencil className="w-5 h-5 mr-1" />
                    <span>Edit</span>
                </button>
            )}
        </div>
        {children}
    </div>
);

export default Section;
