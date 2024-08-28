import React from "react";
import "./index.scss";

interface IProps {a: string}

export default function App(props: IProps) {
  return (
    <div>{props.a}</div>
  )
}

