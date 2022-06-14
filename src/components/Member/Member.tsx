function Member() {
  return (
    <div className="flex justify-start gap-4 items-center mb-1 h-11 w-60 cursor-pointer hover:bg-[#4c5059] p-2 -m-2 mt-2 hover:rounded-xl">
      <img
        className="rounded-full w-8 h-8 cursor-pointer"
        src="https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
        alt="Discord member pfp"
      />
      <a href="/" className="text-[#8e9297] font-semibold">
        Discord User
      </a>
    </div>
  );
}

export default Member;
