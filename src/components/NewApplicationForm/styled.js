import styled from "styled-components";

export const StyledForm = styled.form`
  border-left: 2px solid #db861d;
  padding: 30px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border-bottom: 2px solid #db861d;
  padding-bottom: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 22px;
  }

  label {
    margin-bottom: 4px;
    font-size: 17px;
  }
  .half {
    flex-basis: 46%;
  }

  .full {
    flex-basis: 94%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #db861d;
  border: 1px solid #db861d;
  border-radius: 15px;
  margin: 0 auto;
  transform: translateX(200px);
  font-size: 20px;
`;
