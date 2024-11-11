const InformationCard = ({ text, count, icon }) => {
  return (
    <div className="flex flex-col gap-3 justify-between bg-white p-5 rounded-2xl max-w-[300px] font-light">
      <div className="flex justify-between">
        <div className="text-3xl">{count}</div>
        <div className="rounded-full bg-slate-100 p-3 text-blue-700">
          {icon}
        </div>
      </div>

      <p className="text-xs line-clamp-3">{text}</p>
    </div>
  );
};

export default InformationCard;
