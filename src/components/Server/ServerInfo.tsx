function ServerInfo() {
  return (
    <div className="flex justify-around gap-20 items-center text-white font-bold shadow-md w-full h-14 text-xl">
      <a href="/">Discord Server</a>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#9B9D9F]"
      >
        <path
          d="M17 9.5l-5 5-5-5"
          stroke="#9B9D9F"
          data-stroke="main"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export default ServerInfo;
