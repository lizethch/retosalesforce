// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { fetchRandomUsers } from '../services/api';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función para cargar usuarios
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

        loadUsers();
    }, []);

    const handleRefresh = async () => {
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                <p className="ml-2">Cargando usuarios...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">¡Error!</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center mb-8">
                <button
                    onClick={handleRefresh}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Generar Nuevos Usuarios
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <UserCard key={user.login.uuid} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;