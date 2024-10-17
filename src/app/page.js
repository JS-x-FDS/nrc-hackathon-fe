"use client";
import Image from "next/image";
import Link from "next/link";
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
              className="object-cover scale-x-105 h-full lg:block hidden"
              ref={ref}
            />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.5}
            factorY={0.3}
            className="lg:block absolute"
          >
            <Image alt="Layer2" src={layer2} className="object-cover" />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.2}
            factorY={0.4}
            className="absolute 2xl:bottom-0"
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
            className="absolute bottom-[40%] right-[15%] h-16 w-[15%] uppercase font-medium text-lg animate-bounce"
            href="/nrc"
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
      <div className="lg:hidden w-full h-full">
        <div className="relative h-full">
          <Image
            src={layer2}
            alt="Layer2"
            className="absolute object-cover bottom-0 h-[50%] object-left"
          />
          <Image
            alt="Layer3"
            src={layer3}
            className="absolute bottom-0 object-cover h-[50%] object-left"
          />
          <Image
            alt="Layer4"
            src={layer4}
            className="absolute bottom-[5%] object-cover h-[50%] object-left"
          />
          <div className="absolute flex flex-col justify-center items-center">
            <Image alt="teamName" src={teamName} />
            <Button className="absolute h-12 w-auto uppercase font-medium text-md left-10 top-10 animate-bounce">
              <Link href="/nrc">Get started</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
