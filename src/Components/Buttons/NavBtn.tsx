import { Component, Ref } from "react"
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBtn.css"
import Btn from "./Btn";

type NavBtnProps = {
    className:string
    clickFn: ()=>void
    style?:CSSProperties
}


function NavBtn({className, clickFn, style}:NavBtnProps){
  return (
    <Btn className={className} clickFn={clickFn}/>
  );
}

export default NavBtn;
