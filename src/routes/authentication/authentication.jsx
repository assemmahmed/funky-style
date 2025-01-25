import SignUpForm from "../../components/sign-up-form/signupform";
import SignInForm from "../../components/sign-in-form/signinform";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
