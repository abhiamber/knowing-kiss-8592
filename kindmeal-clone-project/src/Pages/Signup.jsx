import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import style from '../style/Signup.module.css'

function Signup() {
  let { AuthState, handleLogin } = useContext(AuthContext);

  let navigate = useNavigate();
  let [user, setUser] = useState({ email: "", password: "" });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("Please enter a valid details for email and password");
      return navigate("/signup");
    }

    axios
      .post("https://reqres.in/api/login", {
        email: user.email,
        password: user.password,
      })

      .then((res) => {
        if (res.data.token) {
          handleLogin(res.data.token);
          navigate("/");
        }
        // console.log(res)
      })
      .catch((err) => {
        alert(err.message)
        console.log(err)});
  }

  if (AuthState.isAuth) {
    return navigate("/");
  }

  return (
    <div className={style.singupform}>
      <div className={style.box}>

        <div className={style.foodsignup}>
        <img src="https://www.kindmeal.my/images/join_normal.png" alt="" />
        <p>Food Lover Sign Up</p>
        </div>
        <div className={style.restrauntsignup}>
        <img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
        <p>Restaurant Sign UP</p>
        </div>
        <div className={style.whykindmeal} >
        <h2>Why KindMeal</h2>
        <ul>
        <li>Exclusive meat-free deals</li>
        <li>Share yummy food moments</li>
        <li>Meet friendly food lovers</li>
        <li>Discover cool restaurants</li>
        <li>Email updates on tasty deals</li>
        <li>Instant coupons & dining</li>
        <li>No upfront payment, booking or printing</li>
        </ul>

        <Link to="/help" >More About KindMeal </Link>
        </div>
      </div>

      <div className={style.form}>
        <div className="form-text" style={{textAlign:"justify",marginBottom:"60px"}} >
          <h2>
            Food Lover? Sign Up Now or{" "}
            <a href="https://www.facebook.com/login/">Login With Facebook</a>
          </h2>
          <p>
            Discover tasty meat-free meals and dine instantly — no coupon
            payment, booking or printing is required.
          </p>
          <p>
            KindMeal is a fun, exciting and cool new way for you to show your
            compassion towards animals. We collaborate with kind restaurants and
            cafes across the nation to bring you delicious meat-free foods that
            will not only help save precious animal lives, but improve your
            health and save your money at the same time!
          </p>
        </div>

        <div className={style.formDetails}>
          <form onSubmit={handleSubmit}>
            <label style={{ paddingRight: "100px" }}>FirstName</label>
            <label>LastName</label>
            <br />
            Your Name{" "}
            <input
              style={{ padding: "8px", width: "230px", borderRadius: "5px" }}
            />{" "}
            <input
              style={{
                padding: "8px",
                width: "230px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <br />
            <label style={{ marginLeft: "-49px" }}>
              {" "}
              Your email must be correct to receive activation email
            </label>
            <br />
            Email{" "}
            <input
              style={{
                padding: "8px",
                position: "relative",
                left: "20px",
                width: "490px",
                borderRadius: "5px",
              }}
              value={user.email}
              name="email"
              onChange={handleChange}
            />
            <br />
            Re-Enter Email:{" "}
            <input
              style={{
                padding: "8px",
                position: "relative",
                left: "-26px",
                width: "490px",
                marginLeft: "25px",
                marginTop: "10px",
                borderRadius: "5px",
              }}
            />
            <br />
            Password{" "}
            <input
              style={{
                padding: "8px",
                position: "relative",
                left: "8px",
                width: "490px",
                borderRadius: "5px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            <br />
            <label>
              Choose a cool username for your Personal Profile page, comments &
              reviews
            </label>
            <br />
            Username{" "}
            <input
              style={{
                padding: "8px",
                position: "relative",
                left: "6px",
                width: "490px",
                borderRadius: "5px",
                marginTop: "0px",
              }}
            />
            <br />
            <input type="checkbox" style={{ marginTop: "30px" }} />
            <label> I agree to KindMeal.my's Merchant Terms & Conditions</label>
            <br />
            <input
              type="submit"
              value="Join Now"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                fontSize: "20px",
                cursor: "pointer",
                border: "0px",
                marginTop:"10px",
                borderRadius: "5px",
                marginBottom: "30px",
              }}
            />
          </form>
        </div>
      </div>
      
    </div>
  );
}
export default Signup;
