import { Component, Ref } from "react"
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBtn.css"
import Btn from "./Btn";

type HamburgerBtnProps = {
    className:string
    clickFn: ()=>void
    style?:CSSProperties
}


function HamburgerBtn({className, clickFn, style}:HamburgerBtnProps){
  return (
    <Btn className={className} Icon={RxHamburgerMenu} clickFn={clickFn}/>
  );
}

export default HamburgerBtn;
