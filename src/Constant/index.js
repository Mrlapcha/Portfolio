import Cpp from '../assets/cpp.png';
import contact from '../assets/contact.jpg'
import csslogo from '../assets/csslogo.png'
import gitlogo from '../assets/git logo.png'
import github from '../assets/github logo.png'
import htmllogo from '../assets/html logo.png'
import javalogo from '../assets/java logo.png'
import jslogo from '../assets/js logo.webp'
import mongologo from '../assets/mongodb logo.png'
import reactjs from '../assets/react js logo.jpg'
import reactlogo from '../assets/react logo.png'
import tailwindlogo from '../assets/tailwind logo.png'
import Tslogo from '../assets/TS logo.png'
import Uxlogo from '../assets/ux logo.jpg'
import dice from '../assets/Diceroller.jpg'
import todo from '../assets/todoapp.png'
import simpleinterest from '../assets/simpleinterest.jpg'
import web from '../assets/web.jpg'
import react from '../assets/reactdev.jpg'
import ux from '../assets/ux.png'


const services =[
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon:react, 
    },
    {
        title: 'UI/UX Designer',
        icon: ux,

    }

   
]
const technologies=[
    {
        name: 'HTML',
        icon: htmllogo,
    },
    {
        name: 'C/C++',
        icon: Cpp,
    },
    {
        name:"CSS",
        icon: csslogo,
    },
    {
        name:' Git',
        icon: gitlogo,
    },
    {
        name:"Github",
        icon:github,
    },
   
    {
        name: "JS",
        icon: jslogo,
    },
    {
        name: "  ",
        icon: mongologo,
    },
    {
        name: "React-Js",
        icon: reactjs,
    },
    {
        name: "React",
        icon: reactlogo,
    },
    {
        name: "Java",
        icon: javalogo,
    },
    {
        name: "TailWind",
        icon: tailwindlogo,
    },
    {
        name: "TS",
        icon: Tslogo,
    },
    {
        name: "UX",
        icon: Uxlogo,
    },
   


        
]
const projects = [
    {
      name: "Dicerollre",
      description:
        "A simple browser base game for learning purpose, java script and simple css is used here",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
       
      ],
      image: dice,
      source_code_link: "https://github.com/Mrlapcha/Dice-Roller-game.git",
      source_deploy_link: "https://dicerol.netlify.app ",
    },
    {
      name: "ToDo App",
      description:
        "Web application that enables users to manage their daily task and to manage the time efficiently ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Mrlapcha/Somple-TODO-app.git",
      source_deploy_link: "https://to2doapp.netlify.app",

    },
    {
      name: "Simple interest calculator ",
      description:
      "It is simple browser based calculator that can find the simple interest of given principle, time and rate. ",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
       
      ],
      image: simpleinterest,
      source_code_link: "https://github.com/Mrlapcha/Simple_Inaterest_calculator.git",
      source_deploy_link: "https://simple-ic.netlify.app",

    },
  ];
  export {services,technologies, projects};