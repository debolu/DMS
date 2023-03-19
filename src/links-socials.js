import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    nav: []
  },
  {
    id: 2,
    url: '/Our Company',
    text: 'Our Company',
    nav: [
      {
        id: 1,
        navUrl: "/OurCompany/#DMS",
        navText: "DMS"
      },
      {
        id: 2,
        navUrl: "/OurCompany/#our-goals",
        navText: "Our Goals"
      },
      {
        id: 3,
        navUrl: "/OurCompany/#our-vision",
        navText: "Our Vision"
      },
      {
        id: 4,
        navUrl: "/OurCompany/#contact-us",
        navText: "Contact Us"
      }
    ]
  },
  {
    id: 3,
    url: '/Features',
    text: 'Features',
    nav: [
      {
        id: 1,
        navUrl: "/features/#business-listing",
        navText: "Business Lisiting"
      },
      {
        id: 2,
        navUrl: "/features/#marketing-tools",
        navText: "Marketting Tools"
      },
      {
        id: 3,
        navUrl: "/features/#security-check",
        navText: "Security Check"
      },
    ]
  },
  {
    id: 4,
    url: '/Help',
    text: 'Help',
    nav: [
      {
        id: 1,
        navUrl: "/OurCompany/#contact-us",
        navText: "Contact Us"
      },
      {
        id: 2,
        navUrl: "/features/#faq",
        navText: "FAQs"
      },
      {
        id: 3,
        navUrl: "/features/#security-check",
        navText: "Security Check"
      },
    ]
  }
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
