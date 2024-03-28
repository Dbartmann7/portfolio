import { Component, Ref } from "react"
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import "./NavBtn.css"

type BtnProps = {
    label?:string,
    className:string
    clickFn: ()=>void
    Icon?:IconType
    style?:CSSProperties,
    iconClass?:string
    iconStyle?:CSSProperties
}


function Btn({label, className, clickFn, Icon, style, iconClass, iconStyle}:BtnProps){
  return (
    <div className={`${className} button-container`} style={style}>
        {Icon ? <Icon className={`${iconClass} button-icon`} style={iconStyle}/> : <p>{label}</p>}
        <button className="button" onClick={clickFn}/> 
    </div>
  );
}

export default Btn;
