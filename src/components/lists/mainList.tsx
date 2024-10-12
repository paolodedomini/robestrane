import React from "react";
import style from "./mainList.module.scss";

function MainList({ list }: { list: any }) {
  return (
    <ul className={style.mainList}>
      {list ? (
        list.map((item: any, index: number) => (
          <li key={index}>{item.data.title}</li>
        ))
      ) : (
        <li> nessun dato da visualizzare</li>
      )}
    </ul>
  );
}

export default MainList;
