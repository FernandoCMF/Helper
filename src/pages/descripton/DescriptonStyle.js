import styled from 'styled-components';
//Photo by <a href="https://unsplash.com/@larm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Larm Rmah</a> on <a href="https://unsplash.com/s/photos/children?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export const DescriptonContainer = styled.section`
  background-color: #2ec4b6;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptonContent = styled.div`
  background-color: green;
  display: flex;
  width: 60%;
  height: 60%;
`;

export const DescriptonContent_text = styled.div`
  background-color: #011627;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: #ff9f1c;
    font-size: 36px;
    font-weight: bold;
  }
  .text {
    color: #fdfffc;
    font-size: 24px;
    font-weight: normal;
  }
`;

export const DescriptonContent_image = styled.img`
  border: solid 5px rgba(0, 0, 0, 0.5);
  width: 50%;
  height: auto;
`;
