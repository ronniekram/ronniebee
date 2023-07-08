import Image from "next/image";
import { createClient } from "next-sanity";
import type { ImageUrlBuilder, UseNextSanityImageBuilderOptions } from "next-sanity-image";
import { useNextSanityImage } from "next-sanity-image";
import { ImageObj } from "@/utility/types";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const customBuilder = (
  builder: ImageUrlBuilder
) => {
  return builder.quality(100).fit(`clip`).auto(`format`);
};

const SanityImage = ({ image, alt, lazy }: { image: ImageObj; alt: string; lazy?: boolean  }) => {
  const props = useNextSanityImage(client, image, { imageBuilder: customBuilder });

  return (
    <Image
      {...props}
      alt={alt}
      style={{ objectFit: `cover`, objectPosition: `center` }}
      placeholder="blur"
      blurDataURL={image.asset?.metadata?.lqip}
      quality={100}
      loader={props.loader}
      loading={lazy ? `lazy` : `eager`}
    />
  );
};

export default SanityImage;
