import React from "react";
import ListItems from "./ListItems";

const Main = ({ color, uploadedImg }) => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  return (
    <main>
      <div className="image-container">
        {uploadedImg ? (
          <img className="display-img" src={uploadedImg} alt="image" />
        ) : null}
      </div>
      {color ? (
        <ul className="colors-ul">
          {color.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex =
              "#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]);

            return <ListItems key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      ) : null}
    </main>
  );
};

export default Main;
