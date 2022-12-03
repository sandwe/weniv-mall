import React, {useEffect, useRef} from "react";
import * as S from "./style";
import {CloseIcon} from "../icon";

export const Modal = ({setModalOpen}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <S.Container ref={modalRef}>
      <S.CloseBtn onClick={() => setModalOpen(false)}>
        <CloseIcon />
      </S.CloseBtn>
    </S.Container>
  );
};
