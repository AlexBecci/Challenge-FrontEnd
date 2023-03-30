import Blog from "./components/Blog";
import CheckCourse from "./components/CheckCourse";
import Arrow from "./components/CheckCourseComponents/Arrow";
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
      <CheckCourse
        emoji={<EmojiBear />}
        text="Chequea todos los cursos"
        arrow={<Arrow />}
        background="bg-black"
        textColor={"text-yellow-300"}
      />
      <Notices />
    </div>
  );
}

export default App;
