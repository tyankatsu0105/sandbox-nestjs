import * as React from 'react';
import styled from 'styled-components';

// ==========================
// logic
// ==========================

// ==========================
// components
// ==========================
export const PageLoader = () => (
  <Overlay>
    <div>aaaaa</div>
  </Overlay>
);

// ==========================
// styles
// ==========================

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
