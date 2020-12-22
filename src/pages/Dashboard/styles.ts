import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface formProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<formProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 1px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    padding: 24px 24px;
    color: #3a3a3a;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
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

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.form`
  max-width: 700px;
  margin-top: 80px;

  a {
    display: flex;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    height: 100px;
    padding: 24px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      strong {
        font-size: 24px;
        color: #3a3a3a;
      }
      p {
        font-size: 18px;
        color: #3d3d4d;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
