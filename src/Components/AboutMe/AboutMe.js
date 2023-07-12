import React from 'react';
import * as S from './AboutMe.styles';
import logoGithub from '../../svg/github.svg';
import logoLinkedin from '../../svg/linkedin.svg';
import logoUdemy from '../../svg/udemy.svg';
import logoYoutube from '../../svg/youtube.svg';
import logoWeb from '../../svg/website.svg';

function AboutMe() {

    const socialNetworks = [
        {
            name: "Github",
            link: "https://google.com",
            logo: logoGithub
        },
        {
            name: "Linkedin",
            link: "https://google.com",
            logo: logoLinkedin
        },
        {
            name: "Udemy",
            link: "https://google.com",
            logo: logoUdemy
        },
        {
            name: "Youtube",
            link: "https://google.com",
            logo: logoYoutube
        },
        {
            name: "Web",
            link: "https://google.com",
            logo: logoWeb
        },
    ]

  return (
    <S.ContainerAboutMe id='about-me'>
        <S.ContainerFlex>
            <S.ContainerText>
                <S.Title>
                    <p>Hola, yo soy</p>
                    <p>William Cuc</p>
                    <p>Programador</p>
                </S.Title>
                <S.DescriptionText>
                    lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum
                </S.DescriptionText>
                <S.ContainerIcons>
                    {socialNetworks.map((network, index) => (
                        <a key={index} href={network.link} target='_blank' rel='noreferrer'>
                            <img src={network.logo} alt={network.name} />
                        </a>
                    ))}
                </S.ContainerIcons>
            </S.ContainerText>
            <S.ContainerImage>
                <img src='/img/profile.png' alt="William Cuc - Programador" />
            </S.ContainerImage>
        </S.ContainerFlex>
    </S.ContainerAboutMe>
  )
}

export default AboutMe