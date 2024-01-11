import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: #2c435b;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const ContentsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 100%;
  padding: 10px 0 10px 0;
  margin: 0 auto;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  > img {
    width: 80%;
    // height: 80%;
  }
`;

export const LoginBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  > img {
    width: 100%;
  }
`;

export const UserBox = styled.p`
  display: flex;
  color: #fff;
  font-size: 15pt;
  border-radius: 100%;
  > img {
    width: 25px;
    margin-right: 10px;
  }
`;
