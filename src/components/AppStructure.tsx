import ServerList from "./Server/ServerList";
import ServerInfo from "./Server/ServerInfo";
import ChannelsList from "./Channel/ChannelsList";
import MembersList from "./Member/MembersList";
import ChannelContent from "./Channel/ChannelContent";

function AppStructure() {
  return (
    <div className="flex justify-start items-center">
      <div className="flex-none bg-[#23272a] w-22 h-screen">
        <ServerList number="10" />
      </div>
      <div className="flex-none bg-[#2C2F33] w-72 h-screen">
        <ServerInfo />
        <ChannelsList />
      </div>
      <div className="flex bg-[#393C43] w-full h-screen">
        <ChannelContent />
      </div>
      <div className="flex-none bg-[#2C2F33] w-64 h-screen">
        <MembersList />
      </div>
    </div>
  );
}

export default AppStructure;
