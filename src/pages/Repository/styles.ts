import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #555;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const CardRepo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
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
