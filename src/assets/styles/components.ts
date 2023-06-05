import styled from "styled-components";
import { baseTheme } from "./theme";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  @media ${baseTheme.media.extraLarge} {
    max-width: 1160px;
  }
  @media ${baseTheme.media.large} {
    max-width: 992px;
    padding: 0 40px;
  }
  @media ${baseTheme.media.medium} {
    max-width: 768px;
    padding: 0 40px;
  }
  @media ${baseTheme.media.small} {
    max-width: 410px;
    padding: 0 20px;
  }
`;
