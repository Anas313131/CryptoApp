import BottomNav from "../components/BottomNav";
import { FaCamera } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

function Account() {
  return (
    <div className="relative min-h-812px bg-[#f7f8f9]">
      <div className="bg-white px-6 py-7 border-b border-[#efefef]">
        <h2 className="text-[28px] font-medium text-[#1D232F]">
          Account Settings
        </h2>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={profileImg}
              alt="profile"
              className="w-78px h-78px rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#6C25FF] text-white flex items-center justify-center text-[12px]">
              <FaCamera />
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-[#1D232F]">
              Marry Doe
            </h3>
            <p className="text-[16px] text-[#1D232F] mt-1">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="mt-8 text-[18px] leading-[1.65] text-[#1D232F]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <div className="absolute top-270px left-0 w-full border-t border-dashed border-[#cfcfcf]"></div>
      <div className="absolute bottom-60px left-0 w-full border-t border-dashed border-[#cfcfcf]"></div>

      <BottomNav page="4 of 4" prev="/signup" next={null} />
    </div>
  );
}

export default Account;