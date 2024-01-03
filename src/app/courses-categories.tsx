"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Carousel,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Frontend Web Development",
    desc: "300 Courses",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Backend Web Development",
    desc: "200 Courses",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Web Security & Performance",
    desc: "240 Courses",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Full-Stack Web Development",
    desc: "100 Courses",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 pt-28 lg:pt-48" id="sejarah">
      <div className="mb-12 grid">
        <Typography variant="h6" color="white" className="lg:mb-3 mb-2 lg:text-xl text-xs">
          Perjalanan Rasa, Sejarah, dan Keunggulan
        </Typography>
        <Typography
          // variant="h3"
          color="blue-gray"
          className="mb-5 font-bold text-3xl text-[#a4644c]"
        >
          Roti AdonanPremium
        </Typography>
        <Typography className="mb-1 w-full lg:text-base text-sm font-normal !text-gray-500">
        Selamat datang di AdonanPremium, tempat di mana sejarah dan keunggulan menyatu dalam setiap gigitan. Kami mengundang Anda untuk menjelajahi perjalanan rasa autentik dan kaya dari toko roti kami yang telah berdiri sejak tahun 1980.
        </Typography>
      </div>
      <Card color="transparent" shadow={false} className="">
        <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
          <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
            <figure className="relative h-96 w-full">
              <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="https://images.unsplash.com/photo-1515419417963-c06be58556b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZSUyMGNvd2JveXxlbnwwfHwwfHx8MA%3D%3D"
                alt="nature image"
              />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography variant="h5" color="blue-gray" className="lg:text-xl text-sm">
                    Berdiri Sejak
                  </Typography>
                  <Typography color="gray" className="mt-2 font-normal">
                    15 Mei 1980
                  </Typography>
                </div>
                <Typography variant="h5" color="blue-gray" className="lg:block hidden">
                  Depok
                </Typography>
              </figcaption>
            </figure>
          </div>
          <div className="col-span-2 w-full">
            <Typography variant="h6" color="white" className="lg:mb-4 mb-2 lg:text-xl text-xs">
              SEJARAH KAMI
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-4 font-bold text-3xl text-[#FFB000]"
            >
              ADONAN PREMIUM
            </Typography>
            <Typography className="mb-1 w-full font-normal lg:text-base text-sm !text-gray-500">
              seorang pandai roti <span className="underline decoration-[#FFCF9D] ">berpengalaman</span>, membuka toko ini dengan tekad kuat untuk menyajikan roti lezat dan <span className="underline decoration-[#FFCF9D] ">berkualitas tinggi</span> kepada masyarakat. Dari pagi hingga sore, aroma segar roti yang dipanggang dengan cinta dan dedikasi memenuhi udara sekitar toko, menarik pelanggan setia yang datang untuk mencicipi kelezatan setiap kreasi roti.
            </Typography>
            <div className="flex items-center mt-8 gap-4">
              <Avatar
                variant="circular"
                src="/image/avatar3.jpg"
                alt="spotify"
                size="md"
              />
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-0.5">
                  Hasanudin
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  Pendiri
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default CoursesCategories;