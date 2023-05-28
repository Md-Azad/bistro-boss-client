import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Notice from "../../Notice/Notice";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Recommendation from "../Recommendation/Recommendation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Notice></Notice>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recommendation></Recommendation>
      <Featured></Featured>
    </div>
  );
};

export default Home;
