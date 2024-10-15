import React from "react";
import style from "./mainList.module.scss";

function MainList({
  list,
  setPostImage,
}: {
  list: any;
  setPostImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ul className={style.mainList}>
      {list ? (
        list.map((item: any, index: number) => (
          <li
            key={index}
            onMouseEnter={() => setPostImage(item.data.mainimage.url)}
            onMouseLeave={() => setPostImage("")}
          >
            {item.data.title}
          </li>
        ))
      ) : (
        <li> nessun dato da visualizzare</li>
      )}
    </ul>
  );
}

export default MainList;
