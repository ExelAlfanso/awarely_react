import VideoCard from "@/Components/VideoCard";
import { beladiriDatas } from "@/Datas/videoDatas";
import YouTubeThumbnail from "@/lib/YoutubeThumbnail";
import React from "react";

interface BelaDiriProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const BelaDiri: React.FC<BelaDiriProps> = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`min-h-screen bg-white-bone ${className} animate-fade-in-up`}
    >
      <div className="grid grid-cols-4 p-10">
        {beladiriDatas.map((video, idx) => (
          <VideoCard
            key={idx}
            name={video.title}
            description={video.description}
            href={video.href}
          ></VideoCard>
        ))}
      </div>
      {children}
    </div>
  );
};

export default BelaDiri;
