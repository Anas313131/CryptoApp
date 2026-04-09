import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function BottomNav({ page, prev, next }) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center">
      <div className="flex items-center gap-6 px-6 py-3 mb-4 bg-white/80 backdrop-blur-md rounded-full shadow-md text-[#8a8a8a]">
        
        <FaHome
          className="text-[24px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        <IoChevronBack
          className={`text-[28px] ${prev ? "cursor-pointer" : "opacity-40"}`}
          onClick={() => prev && navigate(prev)}
        />

        <span className="text-[16px] font-medium text-[#6f6f6f]">
          {page}
        </span>

        <IoChevronForward
          className={`text-[28px] ${next ? "cursor-pointer" : "opacity-40"}`}
          onClick={() => next && navigate(next)}
        />
        
      </div>
    </div>
  );
}

export default BottomNav;