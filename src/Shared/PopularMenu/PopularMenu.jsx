import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((m) => m.category == "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <div className=" grid md:grid-cols-2 gap-3">
      {menu.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default PopularMenu;
