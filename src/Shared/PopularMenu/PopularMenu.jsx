import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
    <section className="my-12">
      <SectionTitle
        heading={"From Our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className=" mt-3 grid md:grid-cols-2 gap-3">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
