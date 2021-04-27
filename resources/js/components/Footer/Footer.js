import React from "react";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";
import LogoLg from '../Header/img/logolg.png'
import {FaTwitterSquare, FaFacebookSquare,FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa'
import FooterInfo from './FooterInfo';
import FooterClosure from './FooterClosure'
import FooterIntro from "./FooterIntro"
import FooterLove from './FooterLove'
import "./styles.css";

function Footer() {
  return (
    <div>
     
     <FooterIntro />
     <FooterClosure />
     <FooterInfo />
     <FooterLove />
    </div>
    
  );
}

export default Footer;
