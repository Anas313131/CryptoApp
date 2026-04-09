import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-203 px-6 pt-10">
      <div className="px-2">
        <h1 className="text-[32px] leading-tight font-bold text-[#1D232F] mb-4">
          Signin to your <br />
          PopX account
        </h1>

        <p className="text-[#6F6F6F] text-[18px] leading-normal mb-5">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <InputField label="Email Address" placeholder="Enter email address" />
        <InputField
          label="Password"
          placeholder="Enter password"
          type="password"
        />

        <div className="mt-7">
          <Button
            text="Login"
            variant="disabled"
            onClick={() => navigate("/account")}
          />
        </div>
      </div>

      <BottomNav page="2 of 4" prev="/" next="/signup" />
    </div>
  );
}

export default Login;