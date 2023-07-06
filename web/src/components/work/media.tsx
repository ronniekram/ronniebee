import tw, { styled } from "twin.macro";
import { FileAsset, ImageAsset } from "sanity";
import { FiChevronsUp } from "react-icons/fi";
import { useSpringCarousel } from "react-spring-carousel";

import SanityImage from "../shared/sanity-image";

//! ----------> TYPES <----------
type Props = {
  media: {
    asset: ImageAsset | FileAsset;
  }[];
};

//! ----------> STYLES <----------
const VideoWrap = styled.div`
  ${tw`w-full h-full relative overflow-hidden`};
  ${tw`shadow-2xl`};

  video {
    ${tw`object-cover`};
  }
`;

const ImageWrap = styled.div`
  ${tw`w-full h-full flex shadow-2xl`};
  ${tw`relative overflow-hidden`};
  ${tw`rounded-2xl border-grey-600 border-[3px]`};
`;

//! ----------> COMPONENTS <----------
const Video = ({ src }: { src: string; }) => {
  return (
    <VideoWrap>
      <video
        preload="auto"
        controls
        loop
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoWrap>
  );
};
