import styled from "styled-components";

export const Title = styled.h2`
  background: ${(props) => (props.isRed ? "red" : "blue")};
`;
