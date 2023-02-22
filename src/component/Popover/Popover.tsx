import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: React.ReactNode
  initialOpen?: boolean
}
export default function Popover({ children, renderPopover, className, initialOpen }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className='flex flex-col items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className='flex items-center' whileTap={{ scale: 0.97 }}>
          {children}
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='absolute top-10 flex flex-col rounded-sm border border-gray-200 bg-white py-2 px-3 text-black shadow-md'
              variants={{
                open: {
                  clipPath: 'inset(0% 0% 0% 0% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: 'inset(10% 50% 90% 50% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
