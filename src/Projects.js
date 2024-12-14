import { Link } from "react-router-dom";
import About from "./About";
import ProjectCard from "./ProjectCard";
import { IMG_URLS } from "./constants";
const Projects = () => {
  return (
    <div className="min-h-screen relative ">
      <About />
      <h1 className="text-3xl mx-2 p-2 font-bold">Projects</h1>

      <div className="relative flex justify-evenly flex-wrap">
        <Link to="https://dev.atz.nidavellirs.net">
          <ProjectCard
            title="Atz - a Link Shortener Platform"
            description="Designed and Developed complete Front-end for the Atz Link Shortening platform."
            img_src={"atzAi.jpeg"}
          />
        </Link>
        <Link to="https://ytayush.netlify.app">
          <ProjectCard
            title="Youtube Clone"
            description="Our YouTube clone is a modern web application built using React,
          Redux Toolkit, and Tailwind CSS."
            img_src={IMG_URLS[0]}
          />
        </Link>
        <Link to="https://metrofy.netlify.app/">
          <ProjectCard
            title="Metrofy"
            description="Developed a dynamic metro map app to predict efficient metro routes in non-metro cities using Leaflet.js. Integrated multiple markers and paths, showcasing popular locations and optimal routes with Dijkstra's and Nearest Neighbor algorithms. The app adjusts the map view based on selected city coordinates, ensuring a seamless user experience. This project highlights my skills in complex technical problem-solving and user-friendly design."
            img_src={IMG_URLS[1]}
          />
        </Link>
        <Link to="https://mapty-ayush.netlify.app">
          <ProjectCard
            title="Mapty"
            description="A Vanilla JS Project that maps your workout. Make sure to give location access to use the app properly!"
            img_src={IMG_URLS[2]}
          />
        </Link>
        <Link to="https://awhyush.github.io/etch-a-sketch/">
          <ProjectCard
            title="Etch-A-Sketch"
            description="This is a browser version of something between sketchpad and Etch-A-Sketch using HTML, JavaScript & CSS."
            img_src={IMG_URLS[3]}
          />
        </Link>
        <Link to="https://github.com/awhyush/atm_management_system/tree/master/bank_management">
          <ProjectCard
            title="ATM Simulator"
            description="Project created using Java Swing, AWT, MySQL that simulates ATM features like money deposit, withdrawl, check balance etc."
            img_src={IMG_URLS[4]}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

// https://i.ibb.co/48W2pPC/project-1-img.png

//https://i.ibb.co/LJ6NHzF/project-2-img.png

/*
<div className="flex flex-col h-auto m-2 p-2">
        <h1 className="m-2 text-2xl font-bold">Swiggy Clone</h1>
        <div className="w-auto md:flex">
          <div className="flex justify-center h-72 sm:w-auto md:w-96 m-2 p-2 shadow-lg hover:shadow-2xl rounded-lg">
            <img
              className="relative"
              src="https://i.ibb.co/LJ6NHzF/project-2-img.png"
              alt="yt-img"
            />
          </div>
          <div className=" relative  md:flex-1 h-auto m-2 p-2 rounded-lg shadow-lg overflow-auto hover:shadow-2xl">
            <p className="text-black ">
              "Our Swiggy clone is a cutting-edge web application crafted using
              React, Redux, and Tailwind CSS. It revolutionizes the food
              delivery experience, offering users a seamless platform to
              explore, order, and enjoy their favorite dishes from a variety of
              restaurants. With features like user authentication, restaurant
              browsing, menu exploration, ordering, real-time tracking, and
              payment integration, our Swiggy clone brings convenience and
              satisfaction to every mealtime. Whether you're craving comfort
              food or exploring new cuisines, our app delivers a delightful
              dining experience right to your doorstep. Indulge in culinary
              delights with our Swiggy clone!"
            </p>
          </div>
        </div>
      </div>
<div className="flex flex-col h-auto m-2 p-2">
        <h1 className="m-2 text-2xl font-bold">Youtube Clone</h1>
        <div className="md:flex w-auto">
          <div className="flex justify-center h-72 sm:w-auto md:w-96 m-2 p-2 shadow-lg hover:shadow-2xl rounded-lg">
            <img
              className="relative"
              src="https://i.ibb.co/48W2pPC/project-1-img.png"
              alt="yt-img"
            />
          </div>
          <div className=" relative backdrop-blur-sm md:flex-1 h-auto m-2 p-2 rounded-lg shadow-lg hover:shadow-2xl overflow-auto">
            <p className="text-black ">
              "Our YouTube clone is a modern web application built using React,
              Redux, and Tailwind CSS. It offers a seamless video streaming
              experience with features such as user authentication, video
              browsing, playback controls, commenting, liking, and
              subscriptions. Users can upload their own videos, search for
              content, and interact with channels. With a responsive design and
              intuitive user interface, our YouTube clone provides an immersive
              platform for both content creators and viewers. Experience the
              best of YouTube with our feature-rich clone!"
            </p>
          </div>
        </div>
      </div>
*/
