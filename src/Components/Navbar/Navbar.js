import React, { useState } from 'react'
import * as S from './Navbar.styles';

const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);
  return (
    <S.ContainerNavbar>
        <S.ContainerLogo>
          <S.ImageLogo src="/img/logo_dev.png" alt="Logo William Cuc" />
          <div>
            <h1>William Cuc</h1>
            <h2>Programador</h2>
          </div>
        </S.ContainerLogo>

        <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
          <S.BurguerMenu />
          <S.BurguerMenu />
          <S.BurguerMenu />
        </S.ContainerBurguer>


        <S.ContainerItems showMenuBurguer={showMenuBurguer}>
          <p>About Me</p>
          <p>Projects</p>
          <S.Button>Contact Me</S.Button>
        </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default Navbar