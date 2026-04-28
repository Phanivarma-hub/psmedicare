'use client'

/**
 * @author: @emerald-ui
 * @description: Editorial-style team member card with overlapping layers and motion
 * @version: 2.0.0
 * @date: 2026-02-19
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
}

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=1200&q=80',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-16 flex flex-col justify-center', className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-medium tracking-[0.3em] text-on-surface-variant uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className='flex flex-col items-center justify-end gap-8 lg:flex-row lg:gap-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[31.25rem] w-full max-w-[22.5rem] shrink-0 overflow-hidden',
            isPositionRight && 'lg:order-1'
          )}
        >
          <div className='pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/20 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] flex w-full flex-col gap-10 lg:-left-8 lg:w-[calc(100%-350px)] lg:gap-14',
            isPositionRight && 'lg:left-8 lg:items-end'
          )}
        >
          <div>
            <p className='text-4xl leading-[1.1] font-extralight tracking-tight text-on-surface md:text-5xl'>
              {firstName}
              <br />
              <span className='font-normal'>{lastName}</span>
            </p>
          </div>

          <div className={cn('flex items-start gap-6 md:gap-8', isPositionRight && 'justify-end')}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-outline transition-colors duration-300 hover:border-primary hover:bg-primary md:h-20 md:w-20',
                isPositionRight && 'order-1'
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-on-surface transition-all duration-300 group-hover:-rotate-45 group-hover:text-on-primary',
                  isPositionRight && 'rotate-180 group-hover:rotate-[225deg]'
                )}
              />
            </motion.div>

            <div className='w-full md:w-[40%]'>
              <p
                className={cn(
                  'text-sm leading-[1.8] text-on-surface-variant',
                  isPositionRight && 'text-right'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
