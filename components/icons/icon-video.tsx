import { SVGProps } from "react"
const IconVideo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <g fill="currentColor" clipPath="url(#a)">
            <path d="M21.023 18.8c.322.164.666.337 1.035.52 1.348.667 2.303 1.078 3 1.328 1.149.395 2.276-.552 2.582-2.208.174-1.01.352-2.41.36-4.337a24.84 24.84 0 0 0-.338-4.336c-.297-1.654-1.422-2.591-2.574-2.184-.7.26-1.658.679-3.011 1.36-.37.185-.714.361-1.034.527-.005 0 .369 1.951.367 4.646 0 1.57-.129 3.136-.387 4.684ZM19.263 9.28c-.248-1.846-1.757-3.352-3.51-3.536-1.062-.11-3.765-.184-5.745-.135-1.983.038-4.695.226-5.769.383C2.47 6.251.79 7.747.423 9.506.208 10.566.003 12.017 0 14c-.003 1.983.208 3.434.42 4.496.366 1.759 2.047 3.255 3.817 3.514 1.073.155 3.785.343 5.768.383 1.982.049 4.686-.022 5.749-.136 1.75-.183 3.26-1.689 3.51-3.536.14-1.112.265-2.636.266-4.72.001-2.084-.126-3.61-.267-4.721Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h28v28H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default IconVideo
