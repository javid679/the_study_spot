import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  // Retrieve userId from localStorage on component mount
  useEffect(() => {
    const userId = localStorage.getItem("userid");
    setUserId(userId);
  }, []);

  // Handle input changes
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8081/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userid", res.data.userid);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("email", res.data.email);

      window.location = "/HomePage"; // Redirect to home page after successful login
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message); // Set error message if there's an issue
      }
    }
  };

  return (
    <>
      <div className={styles.login_container}>
        <aside className={styles.aside}>
          <p className={styles.quotes}>"</p>
          <p>
            <span>
              <i>
                Explore endless knowledge at Study Spot - where learning never
                stops. Dive into a world of informative articles and expand your
                mind. Unleash your curiosity and fuel your passion for
                education. Join a community of like-minded individuals and
                engage in intellectual discussions. Start your journey towards
                enlightenment today at Study Spot.
              </i>
            </span>
          </p>
          <p className={styles.quotes}>"</p>
        </aside>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1 className={styles.heading}>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Sign in
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1 className={styles.heading}>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
