import Image from "next/image";
import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import type { ImageAsset } from "sanity";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const SanityImage = ({ image, alt }: { image: ImageAsset; alt: string  }) => {
  const props = useNextSanityImage(client, image);

  return (
    <Image
      {...props}
      alt={alt}
      style={{ objectFit: `cover`, objectPosition: `center` }}
      // placeholder="blur"
      // blurDataURL={}
    />
  );
};

export default SanityImage;
