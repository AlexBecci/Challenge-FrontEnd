import Blog from "./components/Blog";
import CheckCourse from "./components/CheckCourse";
import ArrowYellow from "./components/CheckCourseComponents/ArrowYellow";
import EmojiBear from "./components/CheckCourseComponents/EmojiBear";
import ArrowWhite from "./components/CheckCourseComponents/ArrowWhite";
import EmojiHappy from "./components/CheckCourseComponents/EmojiHappy";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Notices from "./components/Notices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="">
      <NavBar />
      <Home />
      <Blog />
      <CheckCourse emoji={<EmojiBear />} text="Chequea todos los cursos" arrow={<ArrowYellow />} background="bg-black" textColor={"text-yellow-300"}/>
      <Notices />
      <CheckCourse emoji={<EmojiHappy/>} text="Revisa todas las noticias" arrow={<ArrowWhite/>} background="bg-rose-600" textColor={"text-gray-200"}/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
