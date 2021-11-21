/** @format */

import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <a>
          <img src="./images/logo.svg" alt="Tesla Logo"></img>
        </a>
      </Logo>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#"> Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panles</a>
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Account</a>
        <a>Menu</a>
        <HamburgerMenu />
      </RightMenu>
      <BurgerMenu>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Exisiting Inventory</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
      </BurgerMenu>
    </HeaderWrapper>
  );
}

export default Header;

const Logo = styled.div`
  display: inline-block;
  cursor: pointer;

  @media (max-width: 865px) {
    align-items: center;
    margin: 0 auto;
    transition: ease-in 0.3s;
  }
`;

const HeaderWrapper = styled.div`
  min-height: 60px;
  position: fixed; //sticky header
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 1201px) {
    max-width: 41rem;
    margin: 0 auto;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: grey;
  flex: 1;

  @media (max-width: 1201px) {
    display: none;
  }

  a {
    font-weight: 600;
    transform: scale(1.2);
    text-transform: Uppercase;
    padding: 0 20px;
    flex-shrink: 0;
  }

  a::hover {
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    transform: scale(1.2);
    text-transform: Uppercase;
    margin-right: 10px;
    flex-shrink: 0;
    padding: 20px;
  }
`;

const HamburgerMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
