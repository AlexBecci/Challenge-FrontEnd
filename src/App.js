import Blog from "./components/Blog";
import CheckCourse from "./components/CheckCourse";
import ArrowYellow from "./components/CheckCourseComponents/ArrowYellow";
import EmojiBear from "./components/CheckCourseComponents/EmojiBear";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Notices from "./components/Notices";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Blog />
      <CheckCourse emoji={<EmojiBear />} text="Chequea todos los cursos" arrow={<ArrowYellow />} background="bg-black" textColor={"text-yellow-300"}/>
      <Notices />
      <CheckCourse 
    </div>
  );
}

export default App;
