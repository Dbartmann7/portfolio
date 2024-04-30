import { useState } from "react";

import portfolioImg from '../Projects/ProjectImgs/project_2.png'
import chatAppImg from '../Projects/ProjectImgs/Chat_App.png'
import weatherAppImg from '../Projects/ProjectImgs/Weather_App.png'
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
    {imgsrc:chatAppImg, name:'Chat App', description:'A real-time chat application developed using Javascript, React, Express and MongoDB', url:'https://www.youtube.com', github:'https://github.com/Dbartmann7/Chat-App', skills:['javascript', 'react', 'express', 'mongoDB', 'mongoose']},
    {imgsrc:weatherAppImg, name:'Weather App', description:'A weather app that ', url:'https://dbartmann7.github.io/improved-web-app/', github:'https://github.com/Dbartmann7/improved-web-app', skills:['typescript', 'react', 'next', 'WeatherAPI']},
    {imgsrc:'', name: "Music Review App", description: "Still in development. A website that uses the Spotify APi that allows users to rate and review albums", github:'',skills:['typescript', 'tailwind', 'react', 'next', 'SpotifyAPI', 'mongodb', 'mongoose']}
]
