import React, { useState, useEffect } from 'react';
import './SignUp.scss';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';  // הוספת useDispatch
import { setUser } from '../../redux/userSlice';  // הוספת הפעולה setUser

interface Allergy {
  id: number;
  name: string;
}

export default function SignUpForm() {
  const dispatch = useDispatch();  // שימוש ב-dispatch
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    allergenIds: [] as number[],
  });

  const [allergyList, setAllergyList] = useState<Allergy[]>([]);

  useEffect(() => {
    axios.get('/api/customers/allergens')
      .then(res => {
        setAllergyList(res.data);
      })
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
      const res = await axios.post('/api/customers/register', formData);
      const customerId = res.data;

      // עדכון ה-Redux עם פרטי המשתמש
      dispatch(setUser({ customerId: customerId.toString(), name: formData.name }));

      // שמירת ה-ID ב-localStorage
      localStorage.setItem('customerId', customerId.toString());

      // ניווט לדף הבית
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
