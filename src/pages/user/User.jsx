 import { useState } from 'react';
import TabButton from './TabButton';
import ProfileHeader from './ProfileHeader';
import Section from './Section';
import SettingItem from './SettingItem';
import { Plus, Pencil, Bell, ChevronRight, CreditCard, Download, Trash2 } from 'lucide-react';

const tabs = [
    { name: 'My Profile', icon: Pencil },
    { name: 'Security', icon: Bell },
    { name: 'Teams', icon: ChevronRight },
    { name: 'Team Member', icon: ChevronRight },
    { name: 'Notification', icon: Bell },
    { name: 'Billing', icon: CreditCard },
    { name: 'Data Export', icon: Download },
    { name: 'Delete Account', icon: Trash2 },
];

export default function User() {
    const [activeTab, setActiveTab] = useState('My Profile');

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Users</h1>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Users
                    </button>
                </header>

                <div className="flex gap-8">
                     <aside className="w-72">
                        <nav className="space-y-1 bg-white rounded-lg shadow-sm p-2">
                            {tabs.map((tab) => (
                                <TabButton
                                    key={tab.name}
                                    name={tab.name}
                                    icon={tab.icon}
                                    isActive={activeTab === tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                />
                            ))}
                        </nav>
                    </aside>

                     <main className="flex-1 space-y-6">
                        <Section title="Profile" onEdit={() => console.log('Edit profile')}>
                            <ProfileHeader
                                name="Ahmed Mohamed"
                                title="Front-end Developer"
                                location="Cairo, Egypt"
                            />
                        </Section>

                        <Section title="Personal Information" onEdit={() => console.log('Edit info')}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Ahmed</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Mohamed</p>
                                </div>
                             </div>
                        </Section>

                        <Section title="Address" onEdit={() => console.log('Edit address')}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Egypt</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">City/State</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Cairo, Egypt</p>
                                </div>
                            </div>
                        </Section>

                        <Section title="Account Settings">
                            <div className="space-y-4">
                                <SettingItem
                                    title="Two-factor Authentication"
                                    description="Add an extra layer of security to your account"
                                    action="Enabled"
                                    actionClass="bg-green-100 text-green-600"
                                />
                                <SettingItem
                                    title="Login History"
                                    description="View your recent login activity"
                                    action="View"
                                />
                                <SettingItem
                                    title="Connected Accounts"
                                    description="Manage your linked accounts and services"
                                    action="Manage"
                                />
                            </div>
                        </Section>
                    </main>
                </div>
            </div>
        </div>
    );
}
