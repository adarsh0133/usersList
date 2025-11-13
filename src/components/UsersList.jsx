import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UsersList = ({ allUser, onDelete }) => {
    const [checkRadio, setcheckRadio] = useState('');

    const setRadioChange = (id) => {
        if (checkRadio === id) {
            setcheckRadio('')
        } else {
            setcheckRadio(id)
        }
    }

    return (
        <>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col-8 m-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Select</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Desgination</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Ph no.</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map((user) => (
                                        <tr key={user.id}>
                                            <th scope="row">
                                                <input type="checkbox" checked={checkRadio === user.id} onChange={() => setRadioChange(user.id)} />
                                            </th>
                                            <td>{user.name}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.desg}</td>
                                            <td>{user.address}</td>
                                            <td>{user.phno}</td>
                                            <td>{user.DOB}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="d-flex align-items-center justify-content-center gap-5">
                            <Link to={'/add'}>
                                <button className='btn btn-primary'>Add User</button>
                            </Link>
                            <Link to={checkRadio ? `/edit/${checkRadio}` : "/"}>
                                <button disabled={!checkRadio} className='btn btn-secondary'>Edit User</button>
                            </Link>
                            <button className='btn btn-danger' onClick={() => {
                                if (!checkRadio) return alert("please select user")
                                onDelete(checkRadio);
                                setRadioChange('');
                            }}>Delete User</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersList