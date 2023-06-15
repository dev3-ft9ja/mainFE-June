import React from "react";
import { menuItems } from "../constants";
import { MenuCard } from "../components/menu";
import Wave from "react-wavify";
import axios from "../axios";

const Menu = () => {
  const [info, setInfo] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`/auth/user/`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    if (info.is_staff === false) {
      window.location.href = "/login";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center  h-screen">
      <div className="md:h-1/5 py-10 xs:py-5 xs:bg-red-200 w-full flex flex-col w-full items-center justify-center sm:mb-10">
        <p className="text-xl font-light">
          Welcome to the FT9ja Admin Console!
        </p>
      </div>
      <div
        className="flex flex-col grid sm:grid-cols-3 grid-cols-2
        justify-center items-center"
      >
        {menuItems.map((item, index) => (
          <MenuCard item={item} key={index} />
        ))}
      </div>

      <div className="text-white h-[15%] fixed bottom-0 w-full hidden md:block">
        <Wave
          fill="rgba(0, 79, 0, 0.08)"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
