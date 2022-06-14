function ServerList(props: any) {
  var serversCount = [];

  for (let i = 0; i < parseInt(props.number); i++) {
    serversCount.push(
      <img
        className={
          i === 0
            ? `rounded-full w-12 h-12 cursor-pointer mt-5 hover:rounded-2xl`
            : "rounded-full w-12 h-12 cursor-pointer hover:rounded-2xl"
        }
        src="https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
        alt="Discord server icon"
        key={String(i)}
      />
    );
  }

  return (
    <div className="divide-y-2 divide-gray-700 divide-solid">
      <div className="flex flex-col items-center m-5 gap-2">
        <img
          className="rounded-full w-12 h-12 cursor-pointer"
          src="https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
          alt="Discord server icon"
        />
      </div>
      <div className="flex flex-col items-center m-5 gap-2">{serversCount}</div>
      <div className="flex flex-col items-end m-5 gap-2">
        <div className="flex items-center justify-center w-12 h-12 bg-[#36393f] rounded-full mt-5 hover:rounded-2xl">
          <svg
            className="text-green-500"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
            ></path>
          </svg>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-[#36393f] rounded-full hover:rounded-2xl">
          <svg
            aria-hidden="false"
            className="text-green-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ServerList;
