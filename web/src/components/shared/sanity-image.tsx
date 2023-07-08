import Image from "next/image";
import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import { ImageObj } from "@/utility/types";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const SanityImage = ({ image, alt }: { image: ImageObj; alt: string  }) => {
  const props = useNextSanityImage(client, image);

  return (
    <Image
      {...props}
      alt={alt}
      style={{ objectFit: `cover`, objectPosition: `center` }}
      placeholder="blur"
      blurDataURL={image.asset?.metadata?.lqip}
    />
  );
};

export default SanityImage;
