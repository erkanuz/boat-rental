export const Contacts = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center max-w-[1600px] mx-auto mt-40 mb-14"
    >
      <h2 className="text-center text-title font-semibold mb-20">
        Contact Us
      </h2>

      <div className="grid place-items-center gap-14">
        <div className="2xl:flex flex-row 2xl:justify-around 2xl:w-full md:text-paragraph text-sm space-y-6 2xl:space-y-0">
          <span className="flex items-center gap-4">
            <img src="/icons/email.svg" alt="email" className="h-6 w-6" />{" "}
            andreaDesign@gmail.com
          </span>
          <span className="flex items-center gap-4">
            <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
            +34 123 456 789
          </span>
          <span className="flex items-center gap-4">
            <img src="/icons/location.svg" alt="location" className="h-6 w-6" />
            123 Street 487 House
          </span>
        </div>

        <div className="flex w-full">
          <iframe
            className="w-full h-[415px] mx-2 2xl:mx-0"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.5113404573337!2d27.64983728184173!3d42.55481128500804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6bd7c690fd397%3A0x9b9e99104a993bb3!2z0JrQtdC5INCf0L7QvNC-0YDQuNC1IDQ!5e0!3m2!1sbg!2sbg!4v1709024956062!5m2!1sbg!2sbg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
