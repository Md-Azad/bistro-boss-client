import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="bg-featured bg-fixed bg-opacity-0 my-16 text-white py-16">
      <SectionTitle
        subHeading={"check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="md:flex pl-36 py-12 bg-slate-400 bg-opacity-40 space-x-16">
        <img className="md:h-52" src={featuredimg} alt="" />
        <div>
          <p>March 20,2023</p>
          <h3 className="uppercase">where can i get some?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam
            quam quod ab dicta earum vero, aut, explicabo quo accusamus quasi
            illo enim necessitatibus corporis, odio veniam incidunt? Asperiores
            pariatur sunt eius neque sed fugit distinctio atque ipsa, amet nam,
            consequuntur adipisci dicta doloribus aspernatur fugiat veritatis
            culpa impedit sapiente.
          </p>
          <button className="btn btn-outline">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
