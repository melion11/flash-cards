import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M13.8 19a1 1 0 0 1-.8-.4l-4.8-6a1 1 0 0 1 0-1.2l5-6a1 1 0 0 1 1.6 1.2L10.3 12l4.3 5.4a1 1 0 0 1-.8 1.6Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
