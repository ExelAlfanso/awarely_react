import YoutubeThumbnail from "@/lib/YoutubeThumbnail";
import React from "react";
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
    <div className="h-auto m-5 text-xs transition-transform bg-white xl:w-100 lg:text-xl w-60 lg:w-70 rounded-2xl hover:scale-105">
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
