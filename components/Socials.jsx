'use client'

import { Key } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';


const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://www.linkedin.com/in/bapi-mandal-2247161b7/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/Bama1030',
    name: <RiGithubFill />
  },
  // {
  //   path: '/',
  //   name: <RiFacebookFill />
  // },
  {
    path: 'https://www.instagram.com/bapi_mandal28/',
    name: <RiInstagramFill />
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon, index) => {
          return (
            <Link href={icon.path} key={index}>
              <div className={`${iconStyles}`}>{ icon.name}</div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials
