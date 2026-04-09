import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function BottomNav({ page, prev, next }) {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[#8a8a8a]">
      <FaHome
        className="text-[24px] cursor-pointer text-[#8a8a8a]"
        onClick={() => navigate("/")}
      />

      <IoChevronBack
        className={`text-[28px] ${prev ? "cursor-pointer" : "opacity-40"}`}
        onClick={() => prev && navigate(prev)}
      />

      <span className="text-[16px] font-medium text-[#6f6f6f]">{page}</span>

      <IoChevronForward
        className={`text-[28px] ${next ? "cursor-pointer" : "opacity-40"}`}
        onClick={() => next && navigate(next)}
      />
    </div>
  );
}

export default BottomNav;