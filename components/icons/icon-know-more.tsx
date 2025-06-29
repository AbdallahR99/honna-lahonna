import { SVGProps } from "react"
const IconKnowMore = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7"
        />
        <path
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4"
        />
    </svg>
)
export default IconKnowMore
