import { Box } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { SystemStyleObject } from '@mui/system'
import { throttle } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'

interface BoxAnimationProps {
  sx?:
    | SystemStyleObject<Theme>
    | ((theme: Theme) => SystemStyleObject<Theme>)
    | Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>
  type: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn'
  children: React.ReactNode
}

const BoxAnimation: React.FC<BoxAnimationProps> = ({ sx, type, children }) => {
  const style = {
    container: {
      position: 'relative',
    },
    wrapper: {
      position: 'relative',
      top: type === 'fadeInUp' ? '100px' : 0,
      left: type === 'fadeInLeft' ? '100vw' : type === 'fadeInRight' ? '-100vw' : 0,
      height: '100%',
      opacity: 0,
      transform: type === 'zoomIn' ? 'scale(0.3)' : '',
      transition: 'all 1s',
    },
    active: {
      top: 0,
      left: 0,
      opacity: 1,
      transform: 'scale(1)',
    },
  }

  const ref = useRef<Element>()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const onScroll = throttle(() => {
      const topHeight = ref.current?.getBoundingClientRect().top || 0
      const innerHeight = window.innerHeight

      if (topHeight < innerHeight) {
        setIsActive(true)
        window.removeEventListener('scroll', onScroll)
      }
    }, 300)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box sx={style.container}>
      <Box sx={[style.wrapper, isActive && style.active]} ref={ref}>
        <Box sx={sx} height="100%">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default BoxAnimation
