import quizData from "../data/quizData.json";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center flex-col items-center">
        <h1 className="text-center text-4xl font-bold mb-8">{quizData.quizTitle}</h1>

        <Link to="/assessment">
          <button
            className={`bg-[#e9246c] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors`}
          >
            Start Assessment
          </button>
        </Link>
      </main>
    </>
  );
};

export default Home;
