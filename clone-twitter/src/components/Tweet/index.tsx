import React from 'react';

import { Container, Retweeted, RocktseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, ComentIcon, RetwwetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocktseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocktseat</span>
            <Dot />
            <time>05 de Abr</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <ComentIcon />
              18
            </Status>
            <Status>
              <RetwwetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;