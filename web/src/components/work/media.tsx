import { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { FiChevronsDown } from "react-icons/fi";
import { useSpringCarousel } from "react-spring-carousel";
import { useSpring, animated as a } from "react-spring";
import useMeasure from "react-use-measure";
import { useWindowSize } from "react-use";

import SanityImage from "@/components/shared/sanity-image";
import Modal from "@/components/shared/modal";
import { ImageObj } from "@/utility/types";
import { X, Back, Next } from "@/assets/carousel-nav";

//! ----------> TYPES <----------
type Props = {
  name: string;
  media: ImageObj[];
};

type CarouselProps = {
  name: string;
  media: ImageObj[];
  currentIdx: number;
  close: () => void;
};

//! ----------> STYLES <----------
const VideoWrap = styled.div`
  ${tw`w-full h-full relative overflow-hidden`};
  ${tw`shadow-2xl`};

  video {
    ${tw`object-cover object-center`};
  }
`;

const CarouselWrap = styled.div`
  ${tw`w-[89%] h-auto md:(w-[89.5%])`};
  ${tw`rounded-2xl shadow-2xl overflow-hidden`};
  ${tw`relative`};
  ${tw`border-4 border-grey-600`};
`;

const More = styled.button`
  ${tw`w-full bg-yellow-600 text-grey-600`};
  ${tw`px-5 py-0.5`};
  ${tw`text-xl font-display font-bold`};
  ${tw`flex items-center justify-between`};
  ${tw`md:(hidden)`};
`;

const Thumbnail = styled.button`
  ${tw`w-full h-[13.8125rem] lg:(h-[fit-content])`};
  ${tw`flex overflow-hidden`};
  ${tw`object-cover object-center`};
  ${tw`rounded-2xl border-[3px] border-grey-600`};
  ${tw`shadow-xl`};
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

const Image = ({ img, alt }: { img: ImageObj; alt: string }) => {
  return (
    <div tw="w-full h-full flex object-cover object-center">
      <SanityImage image={img} alt={alt} />
    </div>
  );
};

const Carousel = ({ name, media, currentIdx, close }: CarouselProps) => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem
  } = useSpringCarousel({
      initialActiveItem: currentIdx,
      items: media.map((i) => ({
        id: `media-${i}`,
        renderItem: <Image img={i} alt={name} />,
      })),
      withLoop: true,
  });

  return (
    <CarouselWrap>
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        tw="absolute z-20 top-0 right-0 mt-4 mr-4"
      >
        <X />
      </button>
      <button
        type="button"
        onClick={slideToPrevItem}
        aria-label="Previous"
        tw="absolute h-full flex items-center left-0 z-10"
      >
        <Back />
      </button>
      {carouselFragment}
      <button
        type="button"
        onClick={slideToNextItem}
        aria-label="Next"
        tw="absolute h-full flex items-center right-0 z-10"
      >
        <Next />
      </button>
    </CarouselWrap>
  );
};

const Media = ({ name, media }: Props) => {
  const { width } = useWindowSize();

  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [ref, bounds] = useMeasure();

  const spring = useSpring({
    height: open ? bounds.height: 0,
  });

  const flip = useSpring({
    transform: open ? `rotate(180deg)` : `rotate(0deg)`,
  });

  useEffect(() => {
    if (width >= 768) {
      setOpen(true);
    }
  }, [width, setOpen]);

  return (
    <>
      <section tw="w-full flex flex-col space-y-6 lg:(order-1 space-y-0)">
        <More type="button" onClick={() => setOpen(!open)}>
          <h2>More</h2>
          <a.p style={flip}>
            <FiChevronsDown size={24} />
          </a.p>
        </More>

        <a.div style={spring} tw="overflow-hidden">
          <div
            ref={ref}
            tw="grid grid-cols-1 gap-y-2.5 md:(grid-cols-2 gap-3) lg:(grid-cols-1)"
          >
            {media.map((x, i) => (
              <Thumbnail
                key={`${name}-${i}`}
                type="button"
                aria-label="See more"
                onClick={() => {
                  setCurrentIdx(i);
                  setOpenModal(true);
                }}
              >
                <SanityImage image={x} alt={name} />
              </Thumbnail>
            ))}
          </div>
        </a.div>
      </section>

      <Modal
        render={({ close, labelId, descriptionId }) => (
          <Carousel
            media={media}
            close={close}
            name={name}
            currentIdx={currentIdx}
          />
        )}
      >
        <div tw="hidden" />
      </Modal>
    </>
  );
};

export default Media;
