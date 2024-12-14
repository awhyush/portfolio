import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:text-neutral-300 dark:bg-neutral-800 ">
      <h1 className="text-4xl p-10 text-center">
        Don't hesitate, feel free to contact! I won't bite. (I promise) 🤫
      </h1>
      <button className="relative bg-black text-white rounded-md w-56 h-16 text-2xl mb-44 dark:bg-white dark:text-black">
        <Link
          to="javascript:void(0)"
          onClick={() => (window.location = "mailto:workxayush@gmail.com")}
        >
          Get In Touch
        </Link>
      </button>
    </div>
  );
};
export default Contact;
