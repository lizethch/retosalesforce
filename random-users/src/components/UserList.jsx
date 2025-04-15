// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { fetchRandomUsers } from '../services/api';

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
        } catch (error) {
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

            <div className="flex justify-center">
                <div className="w-full max-w-6xl overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-600">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Foto
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Género
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Ubicación
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Fecha Nac.
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.login.uuid} className="hover:bg-blue-50 transition-colors">
                                        <td className="px-4 py-4 whitespace-nowrap ">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{user.name.first} {user.name.last}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.gender === 'male' ? 'Masculino' : 'Femenino'}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-sm text-gray-500 truncate max-w-xs">{user.email}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.location.city}, {user.location.country}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(user.dob.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;