import {useState} from "react";
import * as S from "./style";
import {HeartIcon} from "../icon";
import {Modal} from "../Modal";

export const Card = ({productName, price, thumbnailImg}) => {
  const [isSelected, setSelected] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const url = `http://test.api.weniv.co.kr/${thumbnailImg}`;

  const handleLikeBtn = () => {
    setSelected((prevState) => !prevState);
  };

  return (
    <>
      <S.ProductItem onClick={() => setModalOpen(true)}>
        <S.ProductImage src={url} alt={productName} />
        <S.Wrapper>
          <S.ProductName>{productName}</S.ProductName>
          <S.LikeBtn onClick={handleLikeBtn}>
            <HeartIcon isSelected={isSelected} />
          </S.LikeBtn>
        </S.Wrapper>
        <S.ProductPrice>
          {price}
          <S.UnitName>원</S.UnitName>
        </S.ProductPrice>
      </S.ProductItem>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};
