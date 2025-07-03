import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; // הוספת useDispatch
import { setUser } from '../../redux/userSlice'; // הוספת setUser
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // שימוש ב-dispatch

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("אימייל לא תקין").required("שדה חובה"),
    password: Yup.string().required("שדה חובה"),
  });

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, setFieldError }: any) => {
  try {
    const response = await axios.post("http://localhost:8080/api/customers/login", values, {
  withCredentials: true
});
    const customer = response.data;

    dispatch(setUser({ customerId: customer.id, name: customer.name }));

    localStorage.setItem("customerId", customer.id.toString());
    localStorage.setItem("role", customer.isManager ? "manager" : "customer");

    navigate("/home");
  } catch (error) {
    setFieldError("password", "אימייל או סיסמה שגויים");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">התחברות</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="email"
                type="email"
                placeholder="אימייל"
                className="w-full mb-2 px-4 py-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mb-2"
              />

              <Field
                name="password"
                type="password"
                placeholder="סיסמה"
                className="w-full mb-2 px-4 py-2 border rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mb-2"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-2"
              >
                התחברות
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
