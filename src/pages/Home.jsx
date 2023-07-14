import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "../components/Button";
import InputController from "./InputController";

function Home() {
  const [count, setCount] = useState(0);
  const texts = ["Click", "Clicked"];
  const styles = ["shadow-lg", "bg-gray-200"];
  const [search, setSearch] = useState("");
  const myDiv = useRef(0);
  const memo = useMemo(() => `my Count ${count}`, [count]);

  const handleClick = () => {
    setCount(count + 1);
    // i.current = i.current + 1;
  };

  useEffect(() => {
    console.log(memo);
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Search: ", search);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div ref={myDiv}>
      <div className="text-xl my-4 flex gap-4 items-center">
        Count: {count}
        <Button
          text={texts[count % 2]}
          style={styles[count % 2]}
          onClickCB={handleClick}
        />
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-400 rounded-lg p-2"
        />
      </div>
      <InputController />
    </div>
  );
}

export default Home;
