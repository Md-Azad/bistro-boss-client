import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Notice from "../../Notice/Notice";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Notice></Notice>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
    </div>
  );
};

export default Home;
