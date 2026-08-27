import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { About } from '../components/home/About';
import { Services } from '../components/home/Services';
import { Banner } from '../components/home/Banner';
import { Chambers } from '../components/home/Chambers';
import { LatestBlogs } from '../components/home/LatestBlogs';
import { FeaturedVideos } from '../components/home/FeaturedVideos';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Banner />
      <Chambers />
      <LatestBlogs />
      <FeaturedVideos />
      <Testimonials />
      <FAQ />
    </>
  );
}
