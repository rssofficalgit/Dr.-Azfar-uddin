export function Banner() {
  return (
    <section className="py-8 lg:py-10 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="w-full rounded-[2rem] overflow-hidden shadow-xl">
        <img 
          src="/banner-image.png" 
          alt="Achievement Banner" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
