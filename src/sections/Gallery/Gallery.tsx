import { AutoScroll } from "./AutoScroll"

export const Gallery = () => {
  return (
    <section id="gallery" className="mt-40 grid">
      <h2 className="text-center text-title font-semibold">Gallery</h2>
        <div className="my-20">
          <AutoScroll />
        </div>
    </section>
  )
}
