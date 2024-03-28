import { useState } from "react";

import portfolioImg from '../Projects/ProjectImgs/project_2.png'
import chatAppImg from '../Projects/ProjectImgs/Chat_App.png'
import project_3 from '../Projects/ProjectImgs/project_3.png'
import project_4 from '../Projects/ProjectImgs/project_4.png'

export type ProjectsDataType = {
    imgsrc:string,
    name:string,
    description:string,
    url?:string,
    github:string,
    skills:string[]
}

export const projects:ProjectsDataType[] = [
    {imgsrc:portfolioImg, name:'Portfolio Website', description:'A Portfolio website made using Typescript and React', github:'', skills:['typescript', 'react', 'react-router', 'responsive-css']},
    {imgsrc:chatAppImg, name:'Chat App', description:'A real-time chat application developed using Javascript, React, Express and MongoDB', url:'https://www.youtube.com', github:'https://github.com/Dbartmann7/Chat-App', skills:['javascript', 'react', 'express', 'mongodb', 'mongoose', 'responsive-css', 'web-socket']},
    {imgsrc:project_3, name:'AI Learning Tool (Dissertation Project)', description:'A web app that teaches users about 2 types of AI (Genetic Algorithms and NEAT) through visual demonstrations of the AI learning to play 2 types of video games', url:'https://dbartmann7.github.io/improved-web-app/', github:'https://github.com/Dbartmann7/improved-web-app', skills:['javascript', 'react']},
    {imgsrc:project_4, name:'project_4', description:'', github:'', skills:[]},
]
