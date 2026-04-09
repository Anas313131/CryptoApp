import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-812px px-6 pt-6">
      <div className="px-1">
        <h1 className="text-32px leading-1.25 font-bold text-[#1D232F] mb-6">
          Create your <br />
          PopX account
        </h1>

        <InputField label="Full Name" placeholder="Marry Doe" required />
        <InputField label="Phone number" placeholder="Marry Doe" required />
        <InputField label="Email address" placeholder="Marry Doe" required />
        <InputField label="Password" placeholder="Marry Doe" required />
        <InputField label="Company name" placeholder="Marry Doe" />

        <div className="mt-7">
          <p className="text-[16px] text-[#1D232F] mb-3">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>

          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 text-[16px] text-[#1D232F]">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="accent-[#6C25FF] w-5 h-5"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center gap-2 text-[16px] text-[#1D232F]">
              <input
                type="radio"
                name="agency"
                className="accent-[#6C25FF] w-5 h-5"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="mt-170px">
          <Button text="Create Account" onClick={() => navigate("/account")} />
        </div>
      </div>

      <BottomNav page="3 of 4" prev="/login" next="/account" />
    </div>
  );
}

export default Signup;