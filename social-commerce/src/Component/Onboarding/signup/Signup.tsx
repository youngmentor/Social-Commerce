import "./Signup.css"
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { FormValues } from "../../TYPE/type.check"




const Signup = () => {
  let navigate = useNavigate()
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log("form sumitted successfully", data)
  }


  return (
    <>
      <div className="signUpContainer">
        <div className="signUpMain" >
          <div className="signUpHeader">
            <div className="signUpHeaderWrapper">
              <div className="sigUpHeaderCloseBtnDiv">
                <h1>Sign Up</h1>
                <h1 className='signUpCloseBtn'
                  onClick={() => {
                    navigate("/")
                  }}>X</h1>
              </div>
              <p style={{ color: "#606770" }}>It's quick and easy.</p>
            </div>
          </div>
          <div className="signUpBodyContainer" >
            <form action="" className="signUpMainBody" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="signUpNameDiv">
                <input type="text" placeholder='First name' className='signUpFirstNameInput' {...register("firstName" , {
                  required : "Firstname is required"
                })} />
                <input type="text" placeholder='Surname' className='signUpSurnameInput' {...register("surname" , {
                  required : "Surname is required"
                })} />
              </div>
              <p className='errorP'>{errors.firstName?.message || errors.surname?.message}</p>
              <div className="signUpEmailDiv">
                <input type="text" placeholder='Mobile number or email address' className='signUpEmailInput' {...register("email", {
                  required : "Provide an email address or a mobile number",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9, !#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  validate: {
                    notAdmin:(fieldValue) => {
                    return fieldValue !== "admin@example.com" || "Enter a different email address"
                  },
                notBlackListed: (fieldValue) => {
                  return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                }}
                }) } />
                <p className='errorP'>{errors.email?.message}</p>
              </div>
              <div className="signUpPasswordDiv">
                <input type="password" placeholder='New password' className='signUpPasswordInput'{...register("password" , {
                  required : "Password is required"
                })} />
                <p className='errorP'>{errors.password?.message}</p>
              </div>
              <div className="signUpDOBContainer">
                <p className='signUpDOBP'>Date of birth</p>
                <div className="signUpDOBDiv">
                  <select name="" id="signUpDayOfBirthSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select name="" id="signUpMonthOfBirthSelect">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select name="" id="signUpYearOfBirthSelect">
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                  </select>
                </div>
              </div>
              <div className="signUpGenderContainer">
                <p className='signUpGenderP'>Gender</p>
                <div className="signUpGenderDiv">
                  <span className='signUpFemaleGenderSpan'>
                    <label>Female</label>
                    <input type="radio" name='answer' />
                  </span>
                  <span className='signUpFemaleGenderSpan'>
                    <label>Male</label>
                    <input type="radio" name='answer' />
                  </span>
                  <span className='signUpFemaleGenderSpan'>
                    <label>Custom</label>
                    <input type="radio" name='answer' />
                  </span>
                </div>
              </div>
              <section className="signUpLearmMoreWriteUpDiv">
                <p className='signUpLearnMoreP'>People who use our service may have uploaded your contact information to Facebook. <span className='signUpLearnMoreSpan'>Learn more</span>.</p>
              </section>
              <section className='signUpTermsWriteUpDiv'>
                <p className='signUpTermsP'>By clicking Sign Up, you agree to our <span className='signUpTermsSpan'>Terms</span>, <span className='signUpPrivacySpan'>Privacy Policy</span> and <span className='signUpCookiesSpan'>Cookies Policy</span>.</p>
                <p className='signUp_SMS_MsgP'>You may receive SMS notifications from us and can opt out at any time.</p>
              </section>
              <div className="signUpButtonDiv">
                <button className='signUpButton'>Sign up</button>
              </div>
            </form>
          </div>
        </div>
        <section className='signUpWriteUp'>
          <h1>WRITE UP FOR SIGN UP</h1>
        </section>
      </div>

    </>
  )
}

export default Signup