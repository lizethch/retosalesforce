// src/component/UseCard.jsx
import React from 'react';

const UserCard = ({ user }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-2 flex justify-center">
                <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="rounded-full w-20 h-20 border-2 border-white shadow-md"
                />
            </div>
            <div className="p-3">
                <h2 className="text-lg font-bold text-blue-800">
                    {user.name.first} {user.name.last}
                </h2>
                <p className="mt-1 flex items-center text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {user.gender === 'male' ? 'Masculino' : 'Femenino'}
                </p>
                <p className="mt-1 flex items-center text-gray-600 text-sm overflow-hidden text-ellipsis">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg mr-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{user.email}</span>
                </p>
                <p className="mt-1 flex items-center text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg mr-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {user.location.city}, {user.location.country}
                </p>
                <p className="mt-1 flex items-center text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg mr-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(user.dob.date)}
                </p>
            </div>
        </div>
    );
};

export default UserCard;