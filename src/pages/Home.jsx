import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Main from "../components/Main";
import ColorThief from "colorthief";
import { useState } from "react";

const Home = () => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [color, setColor] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const img = new Image();
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 8);
        setColor(colorPalette);
        setUploadedImg(event.target.result);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <header>
        <h1 className="unselectable ">
          COLOR{" "}
          <span>
            ge<span className="n-span">n</span>erator
          </span>
        </h1>
        <div className="input">
          <label htmlFor="file">
            Upload &nbsp; <FontAwesomeIcon icon={faUpload} />
          </label>
          <input type="file" id="file" hidden onChange={uploadImage} />
        </div>
      </header>
      <Main uploadedImg={uploadedImg} color={color} />
    </>
  );
};

export default Home;
