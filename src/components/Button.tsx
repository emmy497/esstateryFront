

interface buttonProps {
  title: string
 
}

const Button = ({ title} : buttonProps) => {
  return (
    <button className="bg-[#7065F0] w-full h-[52px] cursor-pointer rounded-[8px] py-[12px] px-[19px] text-[#FFFFFF] text-[16px] md:text-[18px]">
      {title}
    </button>
  );
}

export default Button