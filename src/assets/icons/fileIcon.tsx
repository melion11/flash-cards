import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3ZM6 5h12a1 1 0 0 1 1 1v8.4l-3.2-2.8a2.8 2.8 0 0 0-3.5 0L5 17.7V6a1 1 0 0 1 1-1Zm12 14H6.6l7-5.8a.8.8 0 0 1 .9 0L19 17v1a1 1 0 0 1-1 1Z"
    />
    <path fill="currentColor" d="M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
