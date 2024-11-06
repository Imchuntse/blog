import React from "react";
import { motion } from "framer-motion";
import { scroller } from 'react-scroll';
const ButtonStyle = ({children,style, onClick}) => {
    return(
        <motion.button
            whileHover = {{scale:1.1, backgroundColor:'#0FFF9D',color:'white' }}
            whileTap = {{scale: 0.9 }}
            style={{
                padding: '10px 10px',
                fontSize: '22px',
                borderRadius: '2px',
                cursor: 'pointer',
                outline: 'none',
                borderColor: '#0FFF9D',
                background: 'black',
                color:'#0FFF9D',
                ...style
            }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
    
}
const ContactButton = () => {
    const scrollToContact = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // 平滑滚动
        })
    };

    return (
        <ButtonStyle style={{ marginTop: '20px' }} onClick={scrollToContact}>
            Contact Me
        </ButtonStyle>
    );
}
const ResumeButton = () =>{
    const handleClick = () => {
        window.open('/resume/JunXie.pdf', '_blank'); // 替换为你的PDF文件路径
    };
    return(
        <ButtonStyle style={{marginRight: '20px'}} onClick={handleClick}>
            My resume
        </ButtonStyle>
    )
}

export{ ContactButton, ResumeButton }