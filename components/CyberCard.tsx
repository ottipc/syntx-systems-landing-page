"use client"

const imageMap: { [key: string]: string } = {
  "AI Analysis": "/maschine1.jpg",
  "Machine Learning": "/maschine2.jpg",
  "System Mapping": "/maschine3.jpg",
}

export const CyberCard = ({ title }: { title: string }) => {
  const imageSrc = imageMap[title] || "/fallback.png"

  return (
    <div
      className="w-[280px] h-[160px] rounded-md overflow-hidden shadow-[0_0_30px_rgba(91,192,222,0.4)] hover:shadow-[0_0_60px_rgba(91,192,222,0.9)] transition duration-300 ease-in-out bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
  )
}
