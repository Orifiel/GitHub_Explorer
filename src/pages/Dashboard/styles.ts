import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 24px 24px;
    color: #3a3a3a;
  }

  button {
    background: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: white;
    width: 210px;
    height: 70px;
    font-weight: bold;
    transition: background-color 0.2s;

    &::placeholder {
      color: #a8a8b3;
    }

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.form`
  a {
    max-width: 700px;
    height: 110px;
    display: flex;
    position: relative;
  }

  img {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 16px;
    left: 16px;
  }

  div {
    position: absolute;
  }
`;
