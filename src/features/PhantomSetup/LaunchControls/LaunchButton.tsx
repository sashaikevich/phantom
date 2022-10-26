import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSetupContext } from "../../../contexts/setupContext"
import { classNames } from "../../../utils"

/* states
x- !isValid (grey button, no shadow, no phantom)
- isValid (light up, animated shadow, floating with shadow animated)
- on hover ( phantom with mouth waving hands and smiling)
- onSend fantom flies away,
- after send: text says: launched... and user redirected
*/

interface LaunchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  children?: string
}

export const LaunchButton = ({
  disabled = false,
  children,
  className: passedStyles,
  ...props
}: LaunchButtonProps) => {
  const { isValid } = useSetupContext()

  // variants: {
  //   validHover: isHover && isValid
  // }

  const transition = {
    duration: 1,
    ease: "easeIn",
    yoyo: Infinity,
  }
  return (
    <div className="tw-relative tw-inline-block">
      <button
        disabled={disabled}
        className={classNames(
          "tw-relative tw-group",
          "disabled:tw-bg-redi-placeholder disabled:tw-border-redi-placeholder disabled:tw-cursor-not-allowed",
          "tw-cursor-pointer tw-rounded-full  tw-text-lg tw-font-semibold tw-px-5 tw-py-1.5 tw-border-2  tw-bg-redi-primary tw-text-redi-light-bg hover:tw-bg-redi-primary-toggle hover:tw-border-redi-primary-toggle tw-border-redi-primary ",
          passedStyles
        )}
        type="button"
        {...props}
      >
        <span className="tw-inline-flex tw-items-center ">
          {children || "Launch"}
          <AnimatePresence>
            {!disabled && isValid && (
              <motion.span
                className="xtw--mt-1.5 tw-relative tw-ml-2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              >
                <motion.svg
                  className="tw-w-5 "
                  animate={{ translateY: [0, -4] }}
                  transition={transition}
                  viewBox="0 0 14.04 17.28"
                >
                  <path
                    fill="#fff"
                    d="M7.06,0h0s-.03,0-.04,0c-.01,0-.03,0-.04,0h0C3.94,.05,1.48,2.53,1.48,5.58v6.41c0,.51,.24,.94,.79,1.13,.54,.19,.83,.37,1.1,.69s.57,.65,.97,.68c.4,.04,.62-.23,1.13-.19,.51,.04,.91,.53,1.55,.53s1.05-.48,1.55-.53c.51-.04,.72,.22,1.13,.19,.4-.04,.69-.36,.97-.68s.56-.51,1.1-.69c.54-.19,.79-.62,.79-1.13V5.58C12.56,2.53,10.11,.05,7.06,0Z"
                  />
                  <g id="arms" className="group-hover:tw-animate-waving">
                    <path
                      fill="#fff"
                      d="M.26,8.97c-.16-.16-.26-.37-.26-.61,0-.47,.38-.85,.85-.85H1.89l-.08,2.51s-1.26-.76-1.56-1.05Z"
                    />
                    <path
                      fill="#fff"
                      d="M13.79,8.97c.16-.16,.26-.37,.26-.61,0-.47-.38-.85-.85-.85h-1.04s.08,2.51,.08,2.51c0,0,1.26-.76,1.56-1.05Z"
                    />
                  </g>
                  <g id="eyes">
                    <path
                      fill="#231f20"
                      d="M9.38,4.11c0,.79-.42,1.42-.94,1.42s-.94-.64-.94-1.42,.38-1.37,.87-1.42c.04,0,.07,.02,.07,.06v.31c.02,.19,.09,.34,.21,.33,.06,0,.18-.05,.31-.27,.04-.07,.13-.05,.2,.08,.12,.26,.22,.57,.22,.92Z"
                    />
                    <path
                      fill="#231f20"
                      d="M6.55,4.11c0,.79-.42,1.42-.94,1.42s-.94-.64-.94-1.42,.38-1.37,.87-1.42c.04,0,.07,.02,.07,.06v.31c.02,.19,.09,.34,.21,.33,.06,0,.18-.05,.31-.27,.04-.07,.13-.05,.2,.08,.12,.26,.22,.57,.22,.92Z"
                    />
                  </g>
                  <path
                    className="tw-opacity-0 group-hover:tw-opacity-100 tw-transition"
                    id="mouth"
                    fill="#231f20"
                    d="M8.07,6.55c0,.58-.47,.87-1.04,.87s-1.04-.3-1.04-.87,.47-.18,1.04-.18,1.04-.39,1.04,.18Z"
                  />
                </motion.svg>
                <motion.span
                  style={{
                    backgroundColor: "#2a53c6",
                    display: "block",
                    width: 14,
                    height: 4,
                    borderRadius: "100%",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                  }}
                  animate={{ scale: [1, 0.6] }}
                  transition={transition}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      <motion.span
        animate={{ opacity: !disabled && isValid ? 1 : 0 }}
        className="shadow tw-absolute tw-inset-0 -tw-z-10 tw-drop-shadow-floating-blue tw-bg-white tw-rounded-full"
      ></motion.span>
    </div>
  )
}
