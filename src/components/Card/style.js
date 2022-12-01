import styled from "styled-components";

export const ProductItem = styled.li`
  width: 380px;
  list-style: none;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  margin: 20px 0 10px;
`;
export const LikeBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  float: right;
`;

export const ProductImage = styled.img`
  width: 380px;
  height: 380px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export const ProductName = styled.strong`
  display: inline-block;
  font-size: 18px;
  width: 338px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

export const UnitName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: 2px;
`;
