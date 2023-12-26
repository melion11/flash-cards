import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M10 19a1 1 0 0 1-.8-1.6l4.5-5.4-4.3-5.4a1 1 0 0 1 .1-1.4 1 1 0 0 1 1.5.2l4.8 6a1 1 0 0 1 0 1.2l-5 6a1 1 0 0 1-.8.4Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
