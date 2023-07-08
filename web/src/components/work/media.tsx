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
  id: string;
  descriptionId: string;
};

type TriggerProps = {
  name: string;
  project: ImageObj;
  idx: number;
  media: ImageObj[];
};

//! ----------> STYLES <----------
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
const Trigger = ({ project, name, idx, media }: TriggerProps) => {
  return (
    <Modal
        render={({ close, labelId, descriptionId }) => (
          <Carousel
            media={media}
            close={close}
            name={name}
            currentIdx={idx}
            id={labelId}
            descriptionId={descriptionId}
          />
        )}
      >
        <Thumbnail
          type="button"
          aria-label="See more"
        >
          <SanityImage image={project} alt={name} lazy />
        </Thumbnail>
      </Modal>
  );
};

const Image = ({ img, alt }: { img: ImageObj; alt: string }) => {
  return (
    <div tw="w-full h-full flex object-cover object-center">
      <SanityImage image={img} alt={alt} />
    </div>
  );
};

const Carousel = ({ name, media, currentIdx, close, id, descriptionId }: CarouselProps) => {
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
    <CarouselWrap
      id={id}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        tw="absolute z-20 top-0 right-0 mt-4 mr-4"
        id={descriptionId}

      >
        <X />
      </button>
      <button
        type="button"
        onClick={slideToPrevItem}
        aria-label="Previous"
        tw="absolute h-full flex items-center left-0 z-10 ml-4"
      >
        <Back />
      </button>
      <button
        type="button"
        onClick={slideToNextItem}
        aria-label="Next"
        tw="absolute h-full flex items-center right-0 z-10 mr-4"
      >
        <Next />
      </button>
      {carouselFragment}
    </CarouselWrap>
  );
};

const Media = ({ name, media }: Props) => {
  const { width } = useWindowSize();

  const [open, setOpen] = useState<boolean>(false);

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
              <Trigger
                project={x}
                idx={i}
                media={media}
                name={name}
                key={`${name}-${i}`}
              />
            ))}
          </div>
        </a.div>
      </section>
    </>
  );
};

export default Media;
