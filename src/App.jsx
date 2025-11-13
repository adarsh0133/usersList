import React, { useState } from 'react'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import EditUser from './components/EditUser'

const users = [
  { id: 1, name: 'Adarsh', address: 'bangalore,KA', phno: '7489571967', DOB: '11-03-2003', email: 'adarsh90399@gmail.com', desg: 'Developer', gender: 'male' },
  { id: 2, name: 'Raj', address: 'Pune,MH', phno: '9584946300', DOB: '14-09-2002', email: 'raj@gmail.com', desg: 'Tester', gender: 'male' },
  { id: 3, name: 'Amit', address: 'Noida,UP', phno: '8922467821', DOB: '09-04-1999', email: 'amit@gmail.com', desg: 'Suppoter', gender: 'male' },
];

const App = () => {
  const [allUSers, setAllUSers] = useState(users)

  const NewUser = (user) => {
    setAllUSers((prev) => {
      return [...prev, user]
    })
  }

  const handleDelete = (id) => {
    setAllUSers((prev) => {
      return prev.filter((user) => user.id != id)
    })
  }

  const handleUpdate = (newData) => {
    setAllUSers((prev) => {
      return prev.map(user => user.id == newData.id ? newData : user)
    })
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/usersList' element={<UsersList allUser={allUSers} onDelete={handleDelete} />} />
        <Route path='/add' element={<AddUser addUser={NewUser} totalUsers={allUSers.length} />} />
        <Route path='/edit/:id' element={<EditUser allUser={allUSers} onUpdate={handleUpdate} />} />
      </Routes>
    </>
  )
}

export default App