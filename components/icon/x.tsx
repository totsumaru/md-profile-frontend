type Props = {
  textColor?: "white"
}

export default function XIcon({ textColor }: Props) {
  const color = textColor === "white" ? "text-white" : "text-gray-800"

  return (
    <svg className={`h-5 w-5 ${color}`} viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m714.163 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.2396h162.604l304.797 435.9906 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"/>
    </svg>
  )
}