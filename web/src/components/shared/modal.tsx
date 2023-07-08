import { cloneElement, useMemo, useState } from "react";
import {
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react-dom-interactions";
import { mergeRefs } from "react-merge-refs";
import { RemoveScroll } from "react-remove-scroll";
import "twin.macro";

//! ----------> TYPES <----------
type DialogProps = {
  children: JSX.Element;
  render: (props: { close: () => void; labelId: string; descriptionId: string }) => JSX.Element;
  open?: boolean;
};

//! ----------> COMPONENTS <----------
const Modal = ({ children, render, open: passedOpen = false }: DialogProps) => {
  const [open, setOpen] = useState(passedOpen);

  const { reference, floating, context } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(() => mergeRefs([reference, (children as any).ref]), [reference, children]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      <FloatingPortal>
        {open && (
          <RemoveScroll enabled={open}>
            <FloatingOverlay
              lockScroll
              style={{
                width: `100vw`,
                height: `100dvh`,
                display: "flex",
                position: `absolute`,
                justifyContent: `center`,
                alignItems: `center`,
                background: "rgba(33, 33, 33, 0.35)",
                top: 0,
                zIndex: 100,
              }}
            >
              <FloatingFocusManager context={context}>
                <div
                  ref={floating}
                  className="Dialog"
                  aria-labelledby={labelId}
                  aria-describedby={descriptionId}
                  {...getFloatingProps()}
                  tw="relative z-[100] mx-auto max-w-[86rem]"
                >
                  {render({
                    close: () => setOpen(false),
                    labelId,
                    descriptionId,
                  })}
                </div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </RemoveScroll>
        )}
      </FloatingPortal>
    </>
  );
};

export default Modal;
