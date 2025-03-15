import styled from "styled-components";

export const StyledCnt = styled.form`
  border-left: 2px solid #db861d;
  padding: 10px 30px;

  .bold {
    font-weight: 600;
  }

  .m-t {
    margin-top: 10px;
  }
`;

export const Card = styled.div`
  border-bottom: 2px solid #db861d;
  font-size: 19px;
  padding: 20px 10px;
  width: 550px;
  position: relative;

  p {
    margin: 0;
    padding: 0;
  }

  .file-icon {
    width: 24px;
    margin-right: 10px;
  }

  .application-title {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ArrowsWrapper = styled.div`
  width: 35px;
  height: 60px;
  position: absolute;
  right: 10px;
  position: absolute;
  bottom: -5px;
  cursor: pointer;

  img: nth-child(2) {
    position: absolute;
    left: 0;
    top: 15px;
  }
`;

export const StatusWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
`;
