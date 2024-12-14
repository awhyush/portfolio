import SectionSkills from "./SectionSkills";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="relative ">
      <div className="flex flex-col items-center justify-center my-20">
        <h1 className="text-3xl italics"></h1>
        <div className="sm:flex m-2 items-center justify-center">
          <div className="flex relative h-64 w-96 m-2 items-center justify-center">
            <img
              alt="profile-pic"
              src="https://static.vecteezy.com/system/resources/previews/024/658/980/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png"
            />
          </div>
          <div className="my-16 h-36 w-96 m-4 p-1">
            <span className="text-xl p-2">My name is</span>
            <p className="text-5xl  font-bold ">Ayush Sharma.</p>
            <span className="text-2xl p-1">I am a full time Job Seeker 🧑🏻‍💻</span>
            <Link to="https://maroon-megan-77.tiiny.site/">
              <p className="px-1 hover:text-orange-800 ">Download Resume 🔗</p>
            </Link>
          </div>
        </div>
      </div>
      <SectionSkills />
    </div>
  );
};
export default About;
