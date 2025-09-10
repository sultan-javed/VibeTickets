const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className="cursor-pointer transition-all bg-black text-amber-50 
    px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px]
     hover:border-b-[9px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
      {text}
    </button>
  );
};

export default Button;
