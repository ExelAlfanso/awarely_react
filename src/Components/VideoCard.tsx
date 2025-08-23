import YoutubeThumbnail from "@/lib/YoutubeThumbnail";
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

interface VideoCardProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  name: string;
  description: string;
  href: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  className,
  name,
  description,
  children,
  href,
}) => {
  return (
    <div className="h-auto m-5 transition-transform bg-white w-100 rounded-2xl hover:scale-105">
      <Link
        id={id}
        className={`text-primary ${className}`}
        to={href}
        target="_blank"
      >
        <YoutubeThumbnail videoUrl={href}></YoutubeThumbnail>
        <div className="m-5">
          <h1 className="font-bold">{name}</h1>
          <h1>{description}</h1>
        </div>
        {children}
      </Link>
    </div>
  );
};

export default VideoCard;
