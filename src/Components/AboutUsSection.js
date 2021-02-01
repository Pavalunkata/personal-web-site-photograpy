import React from "react";
import home1 from "../img/home1.png";
import {StyledLayout, StyledDescription, StyledHide, StyledImage} from "../style";

const AboutUsSection = () =>{
    return(
        <StyledLayout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any fotography or videography ideas that you have. We have profesionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                    <img src={home1} alt="guy with camera"/>
                </StyledImage>
        </StyledLayout>
    )
}

export default AboutUsSection;