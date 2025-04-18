 import { MapPin } from 'lucide-react';

const ProfileHeader = ({ name, title, location }) => (
    <div className="flex items-center gap-5">
        <img
            src="https://avatars.githubusercontent.com/u/100450408?v=4"
            alt={name}
            className="w-24 h-24 rounded-full mr-6 border-4 border-blue-100"
        />
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h2>
            <p className="text-gray-600 mb-1">{title}</p>
            <p className="text-gray-500 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
            </p>
        </div>
    </div>
);

export default ProfileHeader;
