import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = ({ allUser,onUpdate}) => {
  let { id } = useParams();
  let navigate = useNavigate();
  let user = allUser.filter((u) => u.id == id);
  const [userData, setuserData] = useState(user[0]);

  const handleChange = (e) => {
    setuserData((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(userData);
    navigate('/')
  }

  return (
    <>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-6 m-auto">
            <form className='form-control' onSubmit={handleSubmit}>
              <input className='form-control mb-2' type="text" name='name' placeholder='enter name' value={userData.name} onChange={handleChange}/>
              <textarea className='form-control mb-2' type="text" name='address' placeholder='enter address' value={userData.address} onChange={handleChange}/>
              <input className='form-control mb-2' type="text" name='phno' placeholder='enter Phone no.' value={userData.phno} onChange={handleChange}/>
              <input className='form-control mb-2' type="text" name='DOB' placeholder='enter DOB' value={userData.DOB} onChange={handleChange}/>
              <input className='form-control mb-2' type="text" name='email' placeholder='enter email' value={userData.email} onChange={handleChange}/>
              <label className='form-label'>Designation :-</label>
              <select className='form-select mb-2' name="desg" value={userData.desg} onChange={handleChange}>
                <option >Select Option</option>
                <option >Developer</option>
                <option >Suppoter</option>
                <option >Tester</option>
              </select>
              <label className='form-label'>Gender :-</label>
              <div className="mb-2 d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <label>Male</label>
                  <input type="radio" value="male" name='gender' onChange={handleChange}/>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label>Female</label>
                  <input type="radio" value="female" name='gender' onChange={handleChange}/>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label>Others</label>
                  <input type="radio" value="others" name='gender' onChange={handleChange}/>
                </div>
              </div>
              <input type="submit" className='btn btn-primary me-4' />
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

export default EditUser