import React from "react";
import styled from "styled-components";

//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"

//Import img
import home2 from "../img/home2.png"
import {StyledLayout, StyledDescription, StyledImage} from "../style"

const SurvicesSection = () =>{
    return(
        <StyledLayoutSurvices>
            <StyledDescription>
                <h2>High <span>quaility</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img alt="camera" src={home2} />
            </StyledImage>
        </StyledLayoutSurvices>
    )
}
const StyledLayoutSurvices = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default SurvicesSection;