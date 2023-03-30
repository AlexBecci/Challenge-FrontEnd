import Blog from "./components/Blog";
import CheckCourse from "./components/CheckCourse";
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
      <CheckCourse emoji={<EmojiBear/>} />
      <Notices />
    </div>
  );
}

export default App;
