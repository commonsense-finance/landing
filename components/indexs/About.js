import React, { useContext } from 'react'
import { TokenSetContext } from '../../contexts/TokenSetContext';

const About = () => {
    
    const fund = useContext(TokenSetContext)[0];

    return (
        <div>
            {JSON.stringify(fund.description, null, 2) }
            
        </div>
    )
}

export default About
