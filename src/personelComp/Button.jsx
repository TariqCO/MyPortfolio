import { MessageCircle } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="button2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bot-message-square-icon lucide-bot-message-square"
        >
          <path d="M12 6V2H8" />
          <path d="M15 11v2" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
          <path d="M9 11v2" />
        </svg>
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button2 {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #000;
    padding: 0.7em 1.7em;
    cursor: pointer;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    /* Removed box-shadow to eliminate glow */
  }

  .button2:active {
    color: #666;
    /* Removed inset shadows to remove glow effect */
  }

  /* Keep inside ripple animation */
  .button2:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button2:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button2:hover {
    color: #ffffff;
    border: 1px solid #009087;
  }

  .button2:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button2:hover:after {
    top: -45%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default Button;
