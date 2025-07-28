import Hero from "../Components/Hero/Hero";
import PageTransition from "../Components/PageTransition/PageTransition";


const Home = () => {

  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
};

export default Home;