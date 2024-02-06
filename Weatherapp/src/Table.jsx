import React, { useState, useEffect } from 'react';

function Table() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "john.doe",
            addedDate: new Date("2024-01-04"),
            status: "active",
        },
        {
            id: 2,
            username: "jane.smith",
            addedDate: new Date("2023-12-20"),
            status: "inactive",
        },
        {
            id: 3,
            username: "bob.johnson",
            addedDate: new Date("2024-02-02"),
            status: "active",
        },
        {
            id: 4,
            username: "john.johnson",
            addedDate: new Date("2024-02-24"),
            status: "active",
        },
        {
            id: 5,
            username: "Rahul Singh",
            addedDate: new Date("2024-12-02"),
            status: "active",
        },
        {
            id: 6,
            username: "bob",
            addedDate: new Date("2024-02-02"),
            status: "active",
        },
        {
            id: 7,
            username: "bob.singh",
            addedDate: new Date("2024-02-02"),
            status: "active",
        },
        {
            id: 8,
            username: "bob.roy",
            addedDate: new Date("2024-02-02"),
            status: "active",
        },
    ]);
    const [filterText, setFilterText] = useState('');
    const [sortBy, setSortBy] = useState('username');
    const [isSortedDescending, setIsSortedDescending] = useState(false);
    const [startDate, setStartDate] = useState(new Date('2023-01-01'));
    const [endDate, setEndDate] = useState(new Date());
    const handleAddUser = () => {
        const newUser = {
            id: users.length + 1,
            username: "new.user",
            addedDate: new Date(),
            status: "active",
        };


        setUsers([...users, newUser]);
    };

    const handleDeleteUser = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);


        setUsers(updatedUsers);
    };

    const handleChangeStatus = (userId, newStatus) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return { ...user, status: newStatus };
            }
            return user;
        });


        setUsers(updatedUsers);
    };

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleSortChange = (column) => {
        setSortBy(column);
        setIsSortedDescending(!isSortedDescending);
    };

    const handleDateChange = (type, date) => {
        if (type === 'startDate') {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };

    const filteredAndSortedUsers = users
        .filter((user) =>
            user.username.toLowerCase().includes(filterText.toLowerCase()) &&
            user.addedDate >= startDate &&
            user.addedDate <= endDate
        )
        .sort((a, b) => {
            const isAsc = !isSortedDescending;
            const firstValue = a[sortBy];
            const secondValue = b[sortBy];

            return isAsc
                ? firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0
                : firstValue > secondValue ? -1 : firstValue < secondValue ? 1 : 0;
        });

    return (
        <div className="container mx-auto px-4">

            <div className="flex items-center justify-between m-4">
                <h1 className="text-2xl font-bold">Users</h1>
                <button className="bg-gradient-to-br from-pink-400 to-blue-300  text-white font-bold py-2 px-4 rounded" onClick={handleAddUser}>
                    Add User
                </button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Filter by username"
                    value={filterText}
                    onChange={handleFilterChange}
                />
                <div className="flex items-center">
                    <label htmlFor="startDate" className="block text-gray-700 font-bold ml-2">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => handleDateChange('startDate', e.target.value)}
                        className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center ml-4">
                    <label htmlFor="endDate" className="block text-gray-700 font-bold mr-2">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => handleDateChange('endDate', e.target.value)}
                        className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>

            <table className="table-auto w-full">


                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Username</th>
                        <th className="py-3 px-6 text-left">Added Date</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredAndSortedUsers.map((user) => {
                            return (

                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-4 px-6 text-left whitespace-nowrap">{user.username}</td>
                                    <td className="py-4 px-6 text-left">{new Date(user.addedDate).toLocaleDateString()}</td>
                                    <td className="py-4 px-6 text-left">{user.status}</td>
                                    <td className="py-4 px-6 text-center">
                                        <button
                                            className="bg-gradient-to-br from-pink-400 to-blue-300 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleChangeStatus(user.id, 'inactive')}
                                        >
                                            {user.status === 'active' ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button
                                            className="bg-gradient-to-br from-pink-700 to-blue-100 text-white font-bold py-2 px-4 rounded ml-2"
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
