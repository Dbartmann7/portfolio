import { Component, Ref } from "react"
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";


import "../NavBtn.css"
import './InfoBtn.css'
import Btn from "../Btn";


type CloseBtnProps = {
    className:string
    clickFn: ()=>void
    style?:CSSProperties
    iconClass?:string
    iconStyle?:CSSProperties
}


function CloseBtn({className, clickFn, style, iconClass, iconStyle}:CloseBtnProps){
  return (
    <Btn className={`${className} info-btn`} clickFn={clickFn} style={style} Icon={IoCloseCircleOutline} iconClass={iconClass} iconStyle={iconStyle}/>
  );
}

export default CloseBtn;
