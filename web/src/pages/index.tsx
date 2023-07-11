import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, animated as a } from "react-spring";

import { DevBurst, CityBurst } from "@/assets/burst";

//! ----------> STYLES <----------
const Wrapper = styled.section`
  ${tw`mx-auto w-[fit-content] h-[fit-content] max-w-[72.75rem] xl:(w-[78%])`};
  ${tw`flex flex-col justify-center`};
  ${tw`py-24 md:(py-20) xl:(pt-12 pb-64)`};
`;

//! ----------> COMPONENTS <----------
const Home: NextPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isCityHover, setCityHover] = useState<boolean>(false);

  const spring = useSpring({
    transform: isHover ? `scale(1.2)` : `scale(1)`,
    config: { tension: 300, friction: 10 }
  });

  const citySpring = useSpring({
    transform: isCityHover ? `rotate(360deg)` : `rotate(0deg)`,
    config: { tension: 200, friction: 15 }
  });

  const startHover = () => setIsHover(true);
  const cancelHover = () => setIsHover(false);
  const startCityHover = () => setCityHover(true);
  const cancelCityHover = () => setCityHover(false);

  return (
    <Wrapper>
      <a.div
        style={spring}
        tw="w-[80%] h-[fit-content] flex self-end md:(w-[63%]) lg:(w-[58%]) xl:(w-[55%]) 2xl:(w-[50%])"
        onMouseEnter={startHover}
        onMouseLeave={cancelHover}
      >
        <DevBurst />
      </a.div>

      <div tw="mx-auto flex flex-col w-[95%] -mt-12 relative z-10 md:(w-[91%] -mt-16) lg:(-mt-24) xl:(w-[90%]) 2xl:(w-[87%] -mt-48)">
        <p tw="font-display font-bold text-white text-base tracking-[0.75%] pl-[10%] pb-0.5 md:(text-[28px] pb-2) lg:(text-3xl)">
          Nice to meet you! I'm
        </p>
        <Image
          src="/images/name.webp"
          width={1587}
          height={514}
          alt="Ronnie Boniface"
          quality={100}
          loading="eager"
        />
      </div>

      <a.div
        tw="flex w-[48%] -mt-7 relative z-20 md:(w-[35%] -mt-14) lg:(w-[40%] mt-[-72px]) xl:(w-[30%] -mt-16) 2xl:(w-[30%] -mt-20)"
        style={citySpring}
        onMouseEnter={startCityHover}
        onMouseLeave={cancelCityHover}
      >
        <CityBurst />
      </a.div>
    </Wrapper>
  );
};

export default Home;
