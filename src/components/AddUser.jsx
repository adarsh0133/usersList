import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddUser = ({ addUser, totalUsers }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    phno: '',
    DOB: '',
    email: '',
    desg: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.DOB ||
      !formData.address ||
      !formData.desg ||
      !formData.email ||
      !formData.gender ||
      !formData.phno
    ) {
      return alert('All fields are required');
    }


    let newFormData = {
      ...formData,
      id: totalUsers + 1,
    }

    addUser(newFormData);
    setFormData({
      id: '',
      name: '',
      address: '',
      phno: '',
      DOB: '',
      email: '',
      desg: '',
      gender: '',
    })

    navigate('/')
  }
  return (
    <>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-6 m-auto">
            <form className='form-control' onSubmit={handleSubmit}>
              <input className='form-control mb-2' name='name' value={formData.name} type="text" placeholder='enter name' onChange={handleChange} />
              <textarea className='form-control mb-2' name='address' value={formData.address} type="text" placeholder='enter address' onChange={handleChange} />
              <input className='form-control mb-2' name='phno' value={formData.phno} type="text" placeholder='enter Phone no.' onChange={handleChange} />
              <input className='form-control mb-2' name='DOB' value={formData.DOB} type="text" placeholder='enter DOB' onChange={handleChange} />
              <input className='form-control mb-2' name='email' value={formData.email} type="text" placeholder='enter email' onChange={handleChange} />
              <label className='form-label'>Designation :-</label>
              <select className='form-select mb-2' name="desg" value={formData.desg} onChange={handleChange}>
                <option >Select Option</option>
                <option >Developer</option>
                <option >Suppoter</option>
                <option >Tester</option>
              </select>
              <label className='form-label'>Gender :-</label>
              <div className="mb-2 d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <label>Male</label>
                  <input type="radio" value="male" name='gender' onChange={handleChange} />
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label>Female</label>
                  <input type="radio" value="female" name='gender' onChange={handleChange} />
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label>Others</label>
                  <input type="radio" value="others" name='gender' onChange={handleChange} />
                </div>
              </div>
              <input type="submit" className='btn btn-primary' />
            </form>
            <Link to={'/'}>
              <button className='btn btn-secondary mt-2'>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUser