import selfie from '../../images/headshot.jpeg'
import contactImg from '../../images/stockimageportfolio.jpeg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Shauna Dunn',
    headLine: 'Javascript / CSS',
    description: 'Based in Richmond, VA I am a full-stack web developer focusing on UI/UX design.  Proficient in building Node and React applications.',
    buttonLabel: 'Instagram',
    imgStart: false,
    img: selfie,
    alt: 'selfie',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Projects',
    headLine: 'Javascript',
    description: 'I do coding bro',
    buttonLabel: 'My Github',
    imgStart: true,
    img: selfie,
    alt: 'project_ss',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact',
    headLine: 'Shauna Dunn',
    description: 'email: shaunadunn1@gmail.com',
    buttonLabel: 'Email',
    imgStart: false,
    img: contactImg,
    alt: 'contactImg',
    dark: false,
    primary: false,
    darkText: true
}