
import React, { useState, useEffect } from 'react';
import './SignUp.scss';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

interface Allergy {
  id: number;
  name: string;
}

export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    allergenIds: [] as number[],
    isManager: false
  });

  const [allergyList, setAllergyList] = useState<Allergy[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/customers/allergens')
      .then(res => setAllergyList(res.data))
      .catch(err => console.error('Error loading allergies:', err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAllergyToggle = (id: number) => {
    setFormData(prev => ({
      ...prev,
      allergenIds: prev.allergenIds.includes(id)
        ? prev.allergenIds.filter(a => a !== id)
        : [...prev.allergenIds, id]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/customers/register', formData);
      const customerId = res.data;

      dispatch(setUser({ customerId: customerId.toString(), name: formData.name }));
      localStorage.setItem('customerId', customerId.toString());
      localStorage.setItem('role', formData.isManager ? 'manager' : 'customer');

      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('שגיאה בהרשמה');
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>הרשמה</h2>
      <input name="name" placeholder="שם" onChange={handleChange} required />
      <input name="email" placeholder="אימייל" type="email" onChange={handleChange} required />
      <input name="password" placeholder="סיסמה" type="password" onChange={handleChange} required />
      <input name="phoneNumber" placeholder="פלאפון" onChange={handleChange} required />

      <label>
        <input
          type="checkbox"
          checked={formData.isManager}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, isManager: e.target.checked }))
          }
        />
        אני מנהל
      </label>

      <div className="allergy-list">
        <p>סמן אלרגיות:</p>
        {allergyList.map(allergy => (
          <label key={allergy.id}>
            <input
              type="checkbox"
              checked={formData.allergenIds.includes(allergy.id)}
              onChange={() => handleAllergyToggle(allergy.id)}
            />
            {allergy.name}
          </label>
        ))}
      </div>

      <button type="submit">הרשמה</button>

      <p style={{ marginTop: 10 }}>
        כבר יש לך משתמש? <Link to="/login">התחבר כאן</Link>
      </p>
    </form>
  );
}
