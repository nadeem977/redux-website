import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImg } from '../states/textSlice';
import { useNavigate } from 'react-router-dom';



const EnterImage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState();
console.log(image)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = reader.result;
      setImage(img);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    dispatch(getImg({image}));
    navigate('/Gallery');
  };

  return (
    <div className="d-flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column', gap: '20px' }}>
      <h2>Enter  your Image</h2>
      <input type="file" name="image" onChange={handleImageChange} />
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EnterImage;
