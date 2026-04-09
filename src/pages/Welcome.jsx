import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

function Welcome() {
  const navigate = useNavigate();

  const dots = [
    { n: 12, cls: "top-[28px] left-[28px]" },
    { n: 6, cls: "top-[140px] left-[138px]" },
    { n: 7, cls: "top-[160px] left-[218px]" },
    { n: 1, cls: "top-[240px] left-[240px]" },
    { n: 2, cls: "top-[315px] left-[258px]" },
    { n: 3, cls: "top-[375px] left-[330px]" },
    { n: 4, cls: "top-[425px] left-[400px]" },
    { n: 5, cls: "top-[480px] left-[468px]" },
    { n: 8, cls: "top-[78px] right-[36px]" },
    { n: 13, cls: "top-[635px] left-[142px]" },
    { n: 14, cls: "top-[580px] left-[262px]" },
    { n: 15, cls: "bottom-[150px] left-[28px]" },
    { n: 10, cls: "bottom-[72px] left-[140px]" },
    { n: 9, cls: "bottom-[72px] left-[282px]" },
    { n: 11, cls: "bottom-[150px] right-[110px]" },
  ];

  return (
   <div className="relative min-h-screen max-w-375px mx-auto flex flex-col p-6">

  <div className="mt-auto">
    <h1 className="text-[32px] font-bold text-[#1D232F] mb-3">
      Welcome to PopX
    </h1>

    <p className="text-[#6F6F6F] text-[18px] leading-relaxed mb-6">
      Lorem ipsum dolor sit amet,<br />
      consectetur adipiscing elit,
    </p>

    <Button text="Create Account" onClick={() => navigate("/signup")} />

    <div className="mt-3">
      <Button
        text="Already Registered? Login"
        variant="secondary"
        onClick={() => navigate("/login")}
      />
    </div>
  </div>

  <div className="mt-6">
    <BottomNav page="1 of 4" prev={null} next="/login" />
  </div>

</div>
  );
}

export default Welcome;