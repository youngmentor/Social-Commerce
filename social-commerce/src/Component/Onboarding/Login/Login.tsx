import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import "./Login.css";
import { useNavigate } from "react-router-dom";

type FormValues = {
  contact: string | Number;
  password: string;
};

function Login() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const navigate = useNavigate()

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
    window.alert("Login Successfully");

    reset();
  };

  return (
    <>
      <div className="Loginmain">
        <div className="LoginmainWrap">
          <div className="LoginText">
            <h1>Social Commerce</h1>
            <span>
              Social-Commerce helps you connect and sell your products with the
              people in your life
            </span>
          </div>
          <div className="LoginInput">
            <form
              className="LoginInputBox"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="LoginInputBoxWrap">
                <input
                  type="email"
                  id="contact"
                  placeholder="Email address or phone number"
                  {...register("contact", {
                    required: "Email address cannot be empty",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9, !#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={errors.contact ? "inputError" : ""}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password field cannot  be empty",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                      message: "Invalid password format",
                    },
                  })}
                  className={errors.password ? "inputError" : ""}
                />
                <button>Log in</button>
                <p onClick={() => navigate("/")}>Forgotten password?</p>
                <hr className="LogingrayLine" />
                <button className="LSignUpButton" onClick={() => navigate("/signup")}>Create new account</button>
              </div>
            </form>
            <p className="errors">
              {errors.contact?.message && `${errors.contact.message}`}
              <br />
              {errors.password?.message && `${errors.password.message}`}
            </p>
          </div>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
