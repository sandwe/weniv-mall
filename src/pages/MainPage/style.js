import styled from "styled-components";

export const Container = styled.section`
  margin-top: 160px;
`;
export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 60px;
`;
