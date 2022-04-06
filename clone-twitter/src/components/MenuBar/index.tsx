import React from 'react';

import Button from '../Button/intex';

import { Container, TopSide, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData, ExitIcon } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Menssagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Retweetar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Diego Sousa</strong>
          <strong>@diego_sousa</strong>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;