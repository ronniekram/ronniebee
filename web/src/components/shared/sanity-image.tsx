import Image from "next/image";
import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import { ImageObj } from "@/utility/types";

type ImageProps = {
  image: ImageObj;
  alt: string;
  lazy?: boolean;
  cover?: boolean;
}

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const SanityImage = ({ image, alt, lazy, cover }: ImageProps) => {
  const width = image.asset.metadata.dimensions.width;
  console.log(width)
  const props = useNextSanityImage(client, image);

  return (
    <Image
      {...props}
      alt={alt}
      style={{ objectFit: cover ? `cover` : `contain`, objectPosition: `center` }}
      placeholder="blur"
      blurDataURL={image.asset.metadata?.lqip}
      quality={100}
      loader={props.loader}
      width={width}
      loading={lazy ? `lazy` : `eager`}
    />
  );
};

export default SanityImage;
