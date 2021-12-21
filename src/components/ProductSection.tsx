import styled from "styled-components";

interface ProductContainerProps {
  bgImage: string;
  title: string;
  description: string;
  lBtnText: string;
  rBtntext: string;
}

interface styledProps {
  bgImage: string;
}

function ProductSection(props: ProductContainerProps) {
  return (
    <ProductContainer bgImage={props.bgImage}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Actions>
        <ButtonGroup>
          <LeftButton>{props.lBtnText}</LeftButton>
          {props.rBtntext !== "" && <RightButton>{props.rBtntext}</RightButton>}
        </ButtonGroup>
        <DownArrow src="src/assets/images/down-arrow.svg" />
      </Actions>
    </ProductContainer>
  );
}

export default ProductSection;

const ProductContainer = styled.section<styledProps>`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(23, 26, 32, 0.8);
`;

const DownArrow = styled.img`
  height: 40px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
