import styled from "styled-components";

export const StyledSelectedCountryDiv = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledCountryCardDiv = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background-color: burlywood;
    cursor: pointer;
  }
`;
