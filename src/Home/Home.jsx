import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

function Home() {
  const [count, setCount] = useState(0);
  const texts = ["Click", "Clicked"];
  const styles = ["shadow-lg", "bg-gray-200"];
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   setCount((count) => count + 1);
  // }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Search: ", search);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div>
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
    </div>
  );
}

export default Home;
