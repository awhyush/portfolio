const SectionSkills = () => {
  return (
    <>
      <div className="flex justify-center h-auto p-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-center">My Stack</h1>
          <div className="sm:flex">
            <div className="sm:flex items-center hover:shadow-2xl p-2 m-2 h-auto w-40">
              <img
                className="p-9"
                alt="react"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
              />
            </div>
            <div className="sm:flex items-center hover:shadow-2xl p-2 m-2 h-auto w-40">
              <img
                alt="java"
                className="object-contain p-9"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png"
              />
            </div>
            <div className="sm:flex items-center hover:shadow-2xl p-2 m-2 h-auto w-40 ">
              <img
                className="p-9"
                alt="tailwindcss"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
              />
            </div>
            <div className="sm:flex items-center hover:shadow-2xl p-2 m-2 h-auto w-40 ">
              <img
                className="p-9"
                alt="js"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionSkills;
