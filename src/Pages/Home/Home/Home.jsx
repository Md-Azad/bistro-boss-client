import { Helmet } from "react-helmet-async";
import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Notice from "../../Notice/Notice";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Recommendation from "../Recommendation/Recommendation";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Notice></Notice>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recommendation></Recommendation>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
