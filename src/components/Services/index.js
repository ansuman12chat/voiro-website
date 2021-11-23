import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-7.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="service">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>SIMPLIFYING A COMPLEX INDUSTRY</ServicesH2>
                    <ServicesP>Designed and built for media, Voiro is the CRM of choice for sales teams. </ServicesP>    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>ANALYTICS AND INSIGHT</ServicesH2>
                    <ServicesP>Voiro facilitates lean, efficient, empowered teams and builds a stronger data-driven culture.</ServicesP>    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>REVENUE TRANSPARENCY</ServicesH2>
                    <ServicesP>Advanced revenue tracking make Voiro the single source of verified and auditable revenue.</ServicesP>    
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
