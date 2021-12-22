import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <a>
        <img src="src/assets/images/logo.svg" alt="logo" />
      </a>
      <MenuContainer>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </MenuContainer>
      <MenuAction>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </CustomMenu>
      </MenuAction>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuAction = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.button`
  color: #000000;
  background: transparent;
  border: none;
  width: 25px;
  cursor: pointer;
`;
