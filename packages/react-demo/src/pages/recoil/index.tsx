import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

export default function Recoil() {
  return (
    <div>
      <RecoilRoot>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh'
          }}
        >
          <CharacterCounter />
        </div>
      </RecoilRoot>
    </div>
  );
}
