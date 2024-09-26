import Marquee from "react-fast-marquee";

const imageUrls = [
  "https://images.pexels.com/photos/6585322/pexels-photo-6585322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5839288/pexels-photo-5839288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/42091/pexels-photo-42091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const generateMarquee = (direction: "left" | "right") => (
  <Marquee
    autoFill
    pauseOnHover
    direction={direction}
    speed={50}
    gradient={false}
  >
    {imageUrls.map((url, index) => (
      <div
        key={index}
        className="2xl:h-[300px] md:h-[200px] h-[100px] 2xl:w-[600px] md:w-[400px] w-[200px] mr-8 relative overflow-hidden border border-blue-400"
      >
        <img
          src={url}
          alt={`image-${index}`}
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500 xl:border-8 border-4"
        />
      </div>
    ))}
  </Marquee>
);

export const AutoScroll = () => {
  return (
    <div className="grid gap-9">
      {generateMarquee("right")}
      {generateMarquee("left")}
    </div>
  );
};
