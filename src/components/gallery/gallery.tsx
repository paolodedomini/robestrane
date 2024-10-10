"use client";
import { useState } from "react";
import style from "./gallery.module.scss";
import ExportedImage from "next-image-export-optimizer";
import FixedModal from "../modals/fixedModal";
import SimpleSlider from "../sliders/simpleSlider";

function Gallery({ type, images }: { type: string; images: string[] }) {
  const [modalState, setModalState] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  if (type === "one") {
    return (
      <div className={style.galleryGrid}>
        <FixedModal modalState={modalState} closeModal={setModalState}>
          <SimpleSlider data={images} id={currentImage} />
        </FixedModal>
        <div className={style.galleryGrid__colBig}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(0);
            }}
          >
            <ExportedImage
              src={"/image/" + images[0]}
              width={900}
              height={450}
              alt="gallery"
            />
          </button>
        </div>
        <div className={style.galleryGrid__colBig}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(1);
            }}
          >
            <ExportedImage
              src={"/image/" + images[1]}
              width={450}
              height={225}
              alt="gallery"
            />
          </button>
        </div>
        <div className={style.galleryGrid__col}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(2);
            }}
          >
            <ExportedImage
              src={"/image/" + images[2]}
              width={450}
              height={225}
              alt="gallery"
            />
          </button>
        </div>
        <div className={style.galleryGrid__col}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(3);
            }}
          >
            <ExportedImage
              src={"/image/" + images[3]}
              width={450}
              height={225}
              alt="gallery"
            />
          </button>
        </div>
        <div className={style.galleryGrid__col}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(4);
            }}
          >
            <ExportedImage
              src={"/image/" + images[4]}
              width={450}
              height={225}
              alt="gallery"
            />
          </button>
        </div>
        <div className={style.galleryGrid__col}>
          <button
            onClick={() => {
              setModalState(true);
              setCurrentImage(5);
            }}
          >
            <ExportedImage
              src={"/image/" + images[5]}
              width={450}
              height={225}
              alt="gallery"
            />
          </button>
        </div>
      </div>
    );
  }
  if (type === "two") {
    return (
      <div className={style.galleryGrid2}>
        <FixedModal modalState={modalState} closeModal={setModalState}>
          <SimpleSlider data={images} id={currentImage} />
        </FixedModal>
        {images.map((item, index) => {
          return (
            <div key={index} className={style.galleryGrid2__col}>
              <button
                onClick={() => {
                  setModalState(true);
                  setCurrentImage(index);
                }}
              >
                <ExportedImage
                  src={"/image/" + item}
                  width={300}
                  height={230}
                  alt="gallery"
                />
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
