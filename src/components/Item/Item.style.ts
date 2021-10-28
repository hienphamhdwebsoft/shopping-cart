import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-items: center;

  button {
    border-radius: 0 0 10px 10px;
    width: 100%;
    color: #fff;
    background-color: #3f51b5;
  }

  button:hover {
    background-color: #f50057;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
