import React, { useState } from "react";

function Mode() {
  const [dark, setMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState("");
  function handleClick(e) {
    e.preventDefault();
    if (name && email) {
      setSubmit({ name, email });
    }
  }
  return (
    <div
      className={
        dark
          ? "bg-black text-white min-h-screen"
          : "bg-blue-700 text-gray-200 min-h-screen"
      }
    >
      <div className="flex items-center justify-around  mx-2">
        <div>
          <nav className="space-x-4">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Services</a>
          </nav>
        </div>
        <button
          onClick={() => setMode(!dark)}
          className="bg-blue-900 text-gray-300 px-2 mx-4 my-4 rounded-md"
        >
          toggle
        </button>
      </div>

      <div>
        <h1>hello welcome to my react project</h1>
        <div className="flex flex-col p-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-48 text-black "
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-48 mt-3 text-black"
          />
        </div>

        <button onClick={handleClick}>submit</button>
        {submit && (
          <div>
            <p className="font-bold">{submit.name}</p>
            <p className="uppercase">{submit.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mode;
