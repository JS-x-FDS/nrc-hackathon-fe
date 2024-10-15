"use client";
import Image from "next/image";
import layer1 from "./images/layer1.png";
import layer2 from "./images/layer2.png";
import layer3 from "./images/layer3.png";
import layer4 from "./images/layer4.png";
import teamName from "./images/name.png";
import { useElementSize } from "@mantine/hooks";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React from "react";
import { Button } from "antd";
export default function Home() {
  const { ref, height } = useElementSize();

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div
        className="hidden lg:block w-full fixed overflow-hidden"
        style={{
          height,
        }}
      >
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.1}
          className="relative h-full"
        >
          <MouseParallaxChild factorX={0.2} factorY={0.1} className="absolute">
            <Image
              alt="Layer1"
              src={layer1}
              className="object-cover scale-x-105 h-full"
              ref={ref}
            />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.5}
            factorY={0.3}
            className="hidden lg:block absolute"
          >
            <Image alt="Layer2" src={layer2} className="object-cover" />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.2}
            factorY={0.4}
            className="absolute lg:-bottom-16 2xl:bottom-0"
          >
            <Image alt="Layer3" src={layer3} className="scale-x-105" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.3}
            className="absolute h-[10%]"
          >
            <Image alt="Layer4" src={layer4} className="scale-x-100" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.1}
            className="absolute right-[5%]"
          >
            <Image alt="teamName" src={teamName} className="scale-x-105" />
          </MouseParallaxChild>
          <Button
            className="absolute bottom-[40%] right-[15%] h-20 w-[15%] uppercase font-medium text-lg animate-bounce"
            href="/login"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </MouseParallaxContainer>
      </div>
      <div className="lg:hidden fixed w-full h-full">
        <div className="relative h-full">
          <img
            src="/images/hero/sky.webp"
            className="absolute object-cover h-full"
          />
          <img
            src="/images/hero/ground.webp"
            className="w-full absolute bottom-0"
          />
          <img
            src="/images/hero/btc.webp"
            className="absolute left-1/2 -translate-x-1/2 top-6 px-4"
          />
          <div className="absolute top-28 left-1/2 -translate-x-1/2 flex flex-col gap-12 items-center">
            <h1 className="roti-font text-6xl drop-shadow-[6px_6px_rgb(16,51,62)] title-stroke">
              <span className="text-[rgb(255,90,82)]">CODE</span>
              <span className="text-[rgb(255,185,0)]">FEST</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
