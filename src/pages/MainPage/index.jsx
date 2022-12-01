import React from "react";
import * as S from "./style";
import {data} from "../../database/data";
import {Card} from "../../components";

export const MainPage = () => {
  return (
    <S.Container>
      {data !== null ? (
        <S.CardList>
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </S.CardList>
      ) : (
        <></> // 데이터 로드 실패시 띄울 화면 컴포넌트
      )}
    </S.Container>
  );
};
