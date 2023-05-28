import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Notice from "../../Notice/Notice";
import Contact from "../Contact/Contact";
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
    </div>
  );
};

export default Home;
