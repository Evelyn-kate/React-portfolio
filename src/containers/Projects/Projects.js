import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageResponsive } from 'theme/grid';
import { FixedTitle, FixedSubTitle } from 'theme/types';
import {
  ImageButton,
  Group,
  TitleLink,
  Description,
  Skills,
} from './Projects.style';
import {Container} from 'theme/grid';

class Projects  extends Component {
  render() {
    return (
      <Container>
        <FixedTitle>Projects</FixedTitle>
        <FixedSubTitle>Open Source Projects:</FixedSubTitle>
        <Group>
          
        
          <TitleLink 
            href="https://github.com/Evelyn-kate/odinproject" 
            target="_blank" 
            rel="nofollow">Ruby odinproject</TitleLink>
          <Zoomy
            imageUrl={require('assets/The Odin.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton              
                onClick={showImage}> 
                  <ImageResponsive src={require('assets/The Odin.png')} alt="ODIN"/>
                </ImageButton>

            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
          <Description>First Project with Ruby which is a car assess system</Description>

        
        
        </Group>
        <FixedSubTitle>Portfolio:</FixedSubTitle>
        <Group>
          
        
          <TitleLink 
            href="https://github.com/Evelyn-kate/educationSystem" 
            target="_blank" 
            rel="nofollow">School DataWarehouse.</TitleLink>
          <Zoomy
            
            imageUrl={require('assets/Data warehousing.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton 
                           
                onClick={showImage}> 
                  <ImageResponsive width="20%" src={require('assets/Data warehousing.png')} alt="Data warehousing"/>
                </ImageButton>

            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
          <Description>
            Lead Developer back end and front end: 
          </Description>
          <Skills>
            <li>AngularJS</li>
            <li>PHP</li>
            <li>ReactJS</li>
            <li>Javascrpit</li>
            <li>Java</li>
          
          </Skills>

        
        
        </Group>
        <Group>
          
        
          <TitleLink 
            href="https://github.com/Evelyn-kate/covider" 
            target="_blank" 
            rel="nofollow">Covider App</TitleLink>
          <Zoomy
            imageUrl={require('assets/covider.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton              
                onClick={showImage}> 
                  <ImageResponsive width="20%" src={require('assets/covider.png')} alt="Data warehousing"/>
                </ImageButton>

            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
          <Description>
            Registration for Covid-19 candidates - Front End Developer: 
          </Description>
          <Skills>
            <li>Javascrpit</li>
            <li>Java</li>
            <li>CSS</li>
            <li>HTML</li>
          
          </Skills>

        
        
        </Group>
      </Container>

    );
  }
}

export default Projects;