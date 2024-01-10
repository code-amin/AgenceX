const CardTag = ({ text, classes }) => {
  return (
    <div id="CARDTAG" className="italic text-black space-end">
      <span
        className={`rounded-xl bg-slate-300 px-3 mr-2 hover:cursor-pointer hover:bg-slate-200 ${classes}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CardTag;
