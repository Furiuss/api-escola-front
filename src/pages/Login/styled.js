import styled from "styled-components";

export const Title = styled.h2`
  background: ${(props) => (props.isRed ? "red" : "blue")};
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  color: aquamarine;
  font-size: 20px;
  background: blue;
  padding: 10px;
`;
