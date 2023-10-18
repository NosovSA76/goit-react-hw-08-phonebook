import { styled } from "styled-components";

export const VisibleNoVisibleButton = styled.button`
display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[2]}px;

  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;

  max-width: 100%;

  border: 1px solid #dfcece;
  outline: none;

  box-shadow: ${props => props.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: transparent;
  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

    svg {
      fill: ${p => p.theme.colors.primary};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

