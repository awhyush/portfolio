import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
const Body = () => {
  const [code, setCode] = useState(
    `\tfunction hireable(){
      \n\t\tthis.person = hireable;\n
    }\n
    function techStack(){\n
      \tjava = true;\n
      \tjavascript = true;\n
      \ttypescript = true;\n
      \ttailwindcss = true;\n
      \treact = true;
    \n\t}
    \n\treturn hardWorker;
    \n\t//Don't try to type in. (you won't be able to 🙂 )`
  );
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="my-10 mx-4 md:my-28 flex flex-col md:flex-row justify-center">
        <div className="my-16 px-3 w-full md:w-2/4 h-auto text-6xl font-bold p-10 animate-slidein300">
          <p>
            Hello! I am a <u>Front-End </u>Developer.
          </p>
          <p>Nice to meet you.</p>

          <div
            className="py-3
            "
          >
            <CodeEditor
              value={code}
              language="jsx"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              readOnly
              padding={15}
              style={{
                fontSize: 15,
                backgroundColor: "#333333",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
        </div>
        <div className="my-16 md:my-0 md:ml-8 w-full md:w-96 animate-slidein700">
          <p className="text-lg md:text-xl">
            "Welcome to the digital funhouse where React, Tailwind CSS, Java,
            and SQL throw a wild party. As a frontend guru with a penchant for
            DSA, get ready for a blend of style and substance that'll make you
            say, 'Whoa, that's cool! 😎 '
          </p>
          <br />
          <p className="text-lg md:text-xl">
            Imagine user interactions smoother than a buttered eel, thanks to
            React. Picture designs so eye-catching, they make other websites
            question their life choices – that's the magic of Tailwind CSS. With
            Java and SQL holding it down, our platform is as reliable as your
            lucky DSA socks.
          </p>
          <br />
          <p className="text-lg md:text-xl">
            Whether you're a coding ninja or just a curious cat, this platform
            promises an experience that's both enlightening and entertaining.
            So, why settle for the ordinary when you can dive into the
            extraordinary? Step right up and join the circus of tech wonders
            today! 🧑🏻‍💻"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
