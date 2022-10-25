import React from "react"
import { MdLabel } from "react-icons/md"
import { classNames } from "../../../utils"
import { motion, AnimatePresence } from "framer-motion"

interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showFlag?: boolean
  isVisible?: boolean
}

export const CalloutBox = ({
  children,
  showFlag = true,
  className: passedStyles = "",
  isVisible = false,
}: CalloutBoxProps) => {
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className={classNames(
            "tw-relative tw-px-4 tw-py-3 tw-inline-block tw-self-start tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-rounded-lg",
            passedStyles
          )}
        >
          <div className="">{children}</div>
          {showFlag && (
            <motion.div
              initial={{ opacity: 0, marginRight: 60 }}
              animate={{ opacity: 1, marginRight: 16 }}
              transition={{
                delay: 0.2,
                duration: 0.15,
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
              className="flag tw-absolute tw-right-full tw-top-1/2  tw-translate-y-[-50%] tw-mr-4 tw-drop-shadow-floating-blue"
            >
              <MdLabel className="tw-fill-redi-primary tw-w-5 tw-h-5 " />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
