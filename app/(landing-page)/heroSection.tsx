"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

// react icons used
import {
    PiArrowRight,
    PiBookOpenTextLight,
    PiFileThin,
    PiSparkleLight,
    PiTargetLight,
  } from "react-icons/pi";

const tabs = [
    {
        icon:(
            <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 rounded-full p-1" />
        ),
        name: 'AI',
        feature: 'Now with Q&A',
        description: 'Ask literally everything. Bird will answer',
        more: (
            <div className="text-purple-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: 'assets/GroovyDoodle.svg'
    }
]

const HeroSection = () => {
    return ( 
        <div>
            <h2>hero section</h2>
        </div>
     );
}
 
export default HeroSection;