import React, { useState, useEffect } from 'react';
import { fetchRandomUsers } from '../services/api';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await fetchRandomUsers(10);
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setError('Error al cargar los usuarios');
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        loadUsers();
    };

    // Renderizado condicional con spinner pequeño
    if (loading && users.length === 0) {
        return (
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center items-center h-64">
                    <div className="spinner-container flex items-center justify-center">
                        <div className="loading-spinner animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                    <p className="ml-2">Cargando usuarios...</p>
                </div>
            </div>
        );
    }

    if (error && users.length === 0) {
        return (
            <div className="container mx-auto px-4 py-6">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">¡Error!</strong>
                    <span className="block sm:inline"> {error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex justify-center mb-6">
                <button
                    onClick={handleRefresh}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center"
                    disabled={loading}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-svg mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="16"
                        height="16"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {loading ? 'Cargando...' : 'Generar Nuevos Usuarios'}
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {users.map((user) => (
                    <UserCard key={user.login.uuid} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;