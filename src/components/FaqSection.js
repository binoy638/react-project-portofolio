import React from "react";
import styled from "styled-components";
import { About } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>How DO i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            officiis?
          </p>
        </div>
        <div className="faq-Line"></div>
      </div>
      <div className="questions">
        <h4>How DO i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            officiis?
          </p>
        </div>
        <div className="faq-Line"></div>
      </div>
      <div className="questions">
        <h4>How DO i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            officiis?
          </p>
        </div>
        <div className="faq-Line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: black;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: ligther;
  }
  .faq-Line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
