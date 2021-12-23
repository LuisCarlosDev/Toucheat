import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 40px;

  @media(max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const HeaderContent = styled.header`
  width: 100%;
  height: 150px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  border-radius: 10px;

  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;


    gap: 20px;

    h1 {
      width: 200px;
      line-height: 35px;
    }
  }

  img {
    width: 80px;
    height: 80px;
  }

  h2 {
    font-size: 74px;
    text-transform: uppercase;
  }

  span {
    font-size: 54px;
  }

  @media(max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10px;

    margin-top: 20px;
    
    align-items: center;
    justify-content: flex-start;
    
    div {
      margin-left: 0;
      gap: 8px;

      align-items: center;
      justify-content: center;

      img {
        width: 40px;
        height: 40px;
      }

      h1 {
        width: 55px;
        font-size: 15px;
        text-align: justify;
        line-height: 18px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    img {
      width: 80px;
      height: 80px;
    }

    h1 {
      font-size: 20px;
    }

    h2 {
      margin-left: auto;
      font-size: 20px;
      font-weight: 500;
    }

    span {
      font-size: 15px;
      font-weight: 500;
      margin-left: auto;
    }
  }
`;

export const Separator = styled.aside`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-bottom: 10px;

  @media(max-width: 768px) {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .box2 {
      display: none;
    }
  }
`;

export const Listdemand = styled.div`
  width: 860px;
  background-color: #ffffff;

  padding: 20px;

  border-radius: 10px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Demand = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #DCE2E5;

  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const TimeZone = styled.h1`
  color: #e5e5e5;
  text-align: center;

`;
