import React from 'react'
import { StyledHeader, Nav, Logo, Image } from '../components/styles/Header.styled'
import { StyledContainer } from '../components/styles/Container.styled';
import { Button } from '../components/styles/Button.styled';
import { Flex } from '../components/styles/Flex.styled';

function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <Nav>
                    <Logo src='images/logo.svg' alt='Logo' />
                    <Button>Try It Free!!!</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build the Community Your Fans Will Like!!</h1>

                        <p>
                            Huddle re-imagines the way we build communities.You Have a voice,but so does your audience. Create Connections with your Users as you engage in genuine discussions.
                        </p>

                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src="images/illustration-mockups.svg"></Image>
                </Flex>

            </StyledContainer>
        </StyledHeader>
    )
}

export default Header