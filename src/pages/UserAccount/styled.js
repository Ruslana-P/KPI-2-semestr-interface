import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-image: url(/images/original-modified.jpg);
  background-repeat: no-repeat;
  background-size: auto; /* Keeps the original size */
  background-position: top center; /* Aligns image at the top */
  background-color: rgb(24, 36, 102);
  position: relative;
  padding-bottom: 20px;
`;

export const ContainerMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(6, 18, 89, 0.5);
  height: 100%;
  z-index: 2;
`;

export const UserInterfaceCnt = styled.div`
  margin: 0 auto;
  background-color: white;
  display: flex;
  border: 1px solid yellow;
  margin-top: 40px;
  max-width: 950px;
  padding: 30px;
  border-radius: 50px;
  z-index: 2;
  position: relative;
  opacity: 0.9;
  display: flex;
  gap: 30px;
`;
