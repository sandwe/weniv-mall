import React, {useEffect, useState} from "react";
import * as S from "./style";
import {Card, Modal} from "../../components";
import axios from "axios";

export const MainPage = () => {
  const url = `${process.env.REACT_APP_SERVER_URL}/mall`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      const responseData = await response.data;
      setData([...responseData]);
    };

    getData();
  }, []);

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
