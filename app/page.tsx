"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <Style>
      <h2>안녕</h2>
    </Style>
  );
}

const Style = styled.section`
  background: lightgrey;
  height: 100vh;
  width: 100%;

  & > h2 {
    color: black;
  }
`;
