/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, config, animated as a } from "react-spring";
import { Divide as Burger } from "hamburger-react";
import { RemoveScroll } from "react-remove-scroll";
import useMeasure from "react-use-measure";

import useScrollListener from "@/utility/use-scroll-listener";
import { anime } from "@/utility/fonts";
import Mobile from "./mobile";

//! ----------> STYLES <----------
const Wrapper = styled.section`
  ${tw`w-full max-w-[86rem] mx-auto bg-white text-grey-600`};
  ${tw`antialiased font-bold`};
  ${tw`text-2xl xl:(text-[28px] leading-[36px])`};
  ${tw`px-[5.3%] md:(px-[5.2%]) 2xl:(px-0)`};
  ${tw`py-2.5 md:(py-3) xl:(py-5)`};
  ${tw`flex items-center justify-between`};
  ${tw`drop-shadow-sm md:(drop-shadow-md)`};
`;

const Items = styled.nav`
  ${tw`hidden font-display`};
  ${tw`md:(flex items-center)`};
  ${tw`space-x-8 xl:(space-x-10)`};

  a {
    ${tw`transition duration-300 ease-in-out`};
    ${tw`hover:(text-gray-500)`};
  }
`;

//! ----------> COMPONENTS <----------
const Nav = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();

  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [mobileHeight, setMobileHeight] = useState<number>(0);

  const scroll = useScrollListener();

  const spring = useSpring({
    to: { top: show ? 0 : bounds.height, zIndex: show ? 50 : 20 },
    config: { ...config.slow, clamp: true },
  });

  const mobileSpring = useSpring({
    height: open ? mobileHeight : 0,
    zIndex: 10,
    top: bounds.height,
  });

    useEffect(() => {
    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    router.events.on(`routeChangeStart`, () => setOpen(false));

    return () => router.events.off(`routeChangeStart`, () => setOpen(false));
  }, [router.events]);

  return (
    <RemoveScroll enabled={open}>
      <>
      <a.div style={spring} tw="bg-white w-screen">
        <Wrapper ref={ref} className={anime.variable}>
          <Link
            href="/"
            prefetch={false}
            aria-label="Home"
            tw="flex w-[4.875rem] h-[3.125rem] md:(w-[5.8125rem] h-[3.75rem]) xl:(w-[6.3125rem] h-[4.0625rem]) 2xl:(w-[7.25rem] h-[4.6875rem])"
          >
            <Image
              src="/images/rb.png"
              width={449}
              height={291}
              quality={100}
              alt=""
            />
          </Link>

          <Items>
            <Link href="/work" prefetch={false}>Work</Link>
            <Link href="/about" prefetch={false}>About</Link>
            <Link href="/contact" prefetch={false}>Contact</Link>
          </Items>

          <div tw="md:(hidden)">
            <Burger
              toggled={open}
              toggle={setOpen}
              size={32}
              label={open ? `Hide menu` : `Open menu`}
            />
          </div>
        </Wrapper>
      </a.div>

        <a.div style={mobileSpring} tw="overflow-hidden fixed z-[100]">
          <Mobile setHeight={setMobileHeight} />
        </a.div>
      </>
    </RemoveScroll>
  );
};

export default Nav;

