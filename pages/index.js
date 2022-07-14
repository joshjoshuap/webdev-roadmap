import Header from './sections/Header';
import FrontEnd from './sections/Frontend';
import Backend from './sections/Backend';
import FullStack from './sections/Fullstack';
import Tools from './sections/Tools';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <FrontEnd />
        <Backend />
        <FullStack />
        <Tools />
      </div>
    </>
  );
};

export default HomePage;
