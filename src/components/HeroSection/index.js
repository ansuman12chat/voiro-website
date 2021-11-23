import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight,  } from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>MONETISE YOUR MEDIA</HeroH1>
                <HeroP>
                Voiro builds the technology you need for your business so that you don’t have to. We simplify work for media sales, operations, and finance teams, driving efficiency and productivity in perfect harmony.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/reqademo' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight></ArrowRight>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
