import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M3.68 6.3a.67.67 0 0 1 1.09-.5l3.57 2.98 3.58-2.88a.67.67 0 0 1 .94.1.67.67 0 0 1-.1.97l-4 3.22a.67.67 0 0 1-.84 0l-4-3.33a.67.67 0 0 1-.24-.55Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
