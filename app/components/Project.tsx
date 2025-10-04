"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import { ProjectType } from "../types";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";

export const Project = ({ title, tagline, link, thumbnail }: ProjectType) => {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
  }, []);

  return (
    <div className="grid grid-rows-8 grid-cols-4 gap-5 pb-4 overflow-hidden">
      {/* Title */}
      <div className="flex lg:hidden items-center col-span-full text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
        {title}
      </div>

      {/* Thumbnail */}
      {thumbnail && (
        <Card className="col-span-full lg:col-start-1 lg:col-end-3 opacity-0 mobile-animation">
          <CardBody>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </CardBody>
        </Card>
      )}

      {/* Description / Tagline */}
      <Card className="col-span-full lg:col-start-3 lg:col-end-5 opacity-0 mobile-animation descriptionCard">
        <CardBody className="text-gray-400 text-lg">
          <div className="text-2xl font-bold text-white mb-2 opacity-0 mobile-animation titleSection">
            {title}
          </div>
          <p>{tagline}</p>
        </CardBody>
      </Card>

      {/* Link */}
      <Card isHoverable className="col-span-full lg:col-start-3 lg:col-end-5 opacity-0 mobile-animation">
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center text-blue-500 font-bold">
            View Project
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};
