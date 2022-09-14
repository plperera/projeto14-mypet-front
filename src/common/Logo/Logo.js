import styled from "styled-components";
import logoImg from "../Logo/logomarca.png";

export default function Logo() {
  return (
    <Wrapper>
      <LogoMarca src={logoImg} />
      <LogoTipo>
        MyPet
        <div>Pet shop</div>
      </LogoTipo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const LogoMarca = styled.img`
  border-radius: 100%;
`;

const LogoTipo = styled.div`
  height: 60px;
  font-family: "Capriola", sans-serif;
  font-size: 50px;
  color: #574942;
  line-height: 50px;
  position: relative;

  div {
    font-size: 15px;
    display: flex;
    position: absolute;
    top: 35px;
    right: 0;
  }
`;

// LOGOMARCA img
