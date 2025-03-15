import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid grey;
  padding: 16px;
  font-weight: 700;
  font-size:  ${(props) => (props.selected ? "22px" : "18px")};
  border-left: ${(props) => (props.selected ? "5px solid #db861d" : "none")};
  width: 215px;
`;
