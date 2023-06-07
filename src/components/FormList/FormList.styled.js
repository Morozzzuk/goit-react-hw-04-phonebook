import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: black;
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: white;
  outline: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  :focus,
  :hover {
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px 5px;

  background: white;
  border: 1px solid black;
  border-radius: 4px;
  :focus,
  :hover {
    background: #2196f3;
    color: white;
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
