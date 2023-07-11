import React, { useState } from "react";
import Button from "../Button/Button";

function Home() {
  const [count, setCount] = useState(0);
  const texts = ["Click", "Clicked"];
  const styles = ["shadow-lg", "bg-gray-200"];

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-xl my-4">Count: {count}</h1>
      <Button
        text={texts[count % 2]}
        style={styles[count % 2]}
        onClickCB={handleClick}
      />
    </div>
  );
}

export default Home;
