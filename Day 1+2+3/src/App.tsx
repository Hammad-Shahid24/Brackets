import { FC } from "react";
import DisplayUserInfo from "./components/DisplayUserInfo";

const App: FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      {" "}
      <DisplayUserInfo
        name="Hammad Shahid"
        email="admin@demo.com"
        phone="3167943213"
        age={22}
      />
    </div>
  );
};

export default App;
