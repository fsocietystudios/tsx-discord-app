import Category from "../Category/Category";
import Member from "./Member";

function MembersList() {
  return (
    <div className="flex flex-col justify-around items-start m-5 mt-5">
      <Category name="SERVER OWNER">
        <Member />
        <Member />
        <Member />
      </Category>
      <Category name="SERVER ADMIN">
        <Member />
        <Member />
        <Member />
      </Category>
      <Category name="SERVER MOD">
        <Member />
        <Member />
        <Member />
      </Category>
      <Category name="SERVER MEMBERS">
        <Member />
        <Member />
        <Member />
      </Category>
    </div>
  );
}

export default MembersList;
