"use client";

import Image from "next/image";
import { Button, Typography, Card, Carousel } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[25vh] lg:h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/hero-bg.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto lg:w-[1220px] h-[330px] w-72 lg:h-[680px] rounded-bl-[100px] object-cover object-center blur-[2px]"
      />
      <div className="container mx-auto mt-12 lg:mt-28">
        <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1566698629409-787a68fc5724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJyZWFkfGVufDB8fDB8fHww"
              alt="image 2"
              className="max-h-[12.3rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-base md:text-4xl lg:text-5xl"
                >
                  Roti <span className="underline decoration-[#FFCF9D] text-[#FFB000]">Kelezatan Tinggi</span>, Momen Luar Biasa!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 opacity-80 text-xs"
                >
                  Nikmati setiap gigitan dengan kelezatan tinggi roti pilihan kami. <span className="lg:block hidden">Dari croissant yang meluncur di lidah hingga roti gandum yang kenyal, setiap momen adalah petualangan rasa yang tak terlupakan.</span>
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white" className="lg:block hidden">
                    About Me
                  </Button>
                  <Button size="lg" color="white" variant="text" className="lg:block hidden">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1675277222547-a4da8457ec2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWR8ZW58MHx8MHx8fDA%3D"
              alt="image 1"
              className="max-h-[12.3rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-base md:text-4xl lg:text-5xl"
                >
                  Roti <span className="underline decoration-[#FFCF9D] text-[#FFB000]">Sehat</span>, Nikmat Tak Terduga!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 opacity-80 text-xs"
                >
                  Temukan kelezatan sejati dalam setiap gigitan dengan koleksi roti sehat kami. <span className="lg:block hidden"> Dibuat dengan bahan berkualitas tinggi, roti kami tidak hanya memanjakan lidah Anda tetapi juga memberikan energi positif untuk hari-hari Anda.</span>
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white" className="lg:block hidden">
                    About Me
                  </Button>
                  <Button size="lg" color="white" variant="text" className="lg:block hidden">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFkfGVufDB8fDB8fHww"
              alt="image 3"
              className="max-h-[12.3rem] lg:max-h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-base md:text-4xl lg:text-5xl"
                >
                  Eksplorasi Rasa dengan Roti <span className="underline decoration-[#FFCF9D] text-[#FFB000]">Kreatif</span> Kami!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 opacity-80 text-xs"
                >
                  Berani mencoba sesuatu yang baru? Temukan eksplorasi rasa yang tak terbatas dengan varian roti kreatif kami. <span className="lg:block hidden">Dari kombinasi unik hingga cita rasa yang memikat, setiap roti adalah karya seni untuk menantang selera Anda.</span> 
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white" className="lg:block hidden">
                    About Me
                  </Button>
                  <Button size="lg" color="white" variant="text" className="lg:block hidden">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Hero;
