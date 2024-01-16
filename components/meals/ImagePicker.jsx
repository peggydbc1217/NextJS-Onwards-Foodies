"use client";

import React, { useRef } from "react";
import classes from "./ImagePicker.module.css";
import { useState } from "react";
import Image from "next/image";


export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChanged(e) {
    const files = e.target.files[0];
    if (!files) {
        setPickedImage(null);
        return;
    }

    //change to blob
    const reader = new FileReader();

    //read the file as a data url
    //Reading the file as a data URL means that the contents of the file will be converted to a Base64-encoded string that can be used as a data source for things like displaying images in an HTML <img> element.
    reader.readAsDataURL(files);

    reader.onload = function () {
        //when done reading, set picked image
          setPickedImage(reader.result);
        };
    
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            ></Image>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChanged}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
