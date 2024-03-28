import { Component, Ref } from "react"
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

import "../NavBtn.css"
import './InfoBtn.css'
import Btn from "../Btn";


type InfoBtnProps = {
    className:string
    clickFn: ()=>void
    style?:CSSProperties
    iconClass?:string
}


function InfoBtn({className, clickFn, style, iconClass}:InfoBtnProps){
  return (
    <Btn className={`${className} info-btn`} clickFn={clickFn} style={style} Icon={IoInformationCircleOutline} iconClass={iconClass}/>
  );
}

export default InfoBtn;
