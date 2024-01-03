"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar, Carousel, CardHeader } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        
      </div>

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
      <div className="container mx-auto px-8 pt-44 grid grid-cols-1 gap-6 lg:grid-cols-1">
      <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <figure className="relative h-96 w-full">
                <img
                  className="h-full w-full rounded-xl object-cover object-center"
                  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Sara Lamalo
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                      20 July 2022
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray">
                    Growth
                  </Typography>
                </figcaption>
              </figure>
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4">
                ONLINE COURSE
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Full-Stack Web Development
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                Become a versatile developer by combining frontend and backend
                skills. Build complete web applications from start to finish.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    International course collection in 10 languages
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    Certified include
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    Otto Gonzalez
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Senior Designer @company.com
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto px-8 pt-44 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="relative grid min-h-[17rem] w-full overflow-hidden">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody className="relative flex flex-col justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
        <Card className="relative grid min-h-[17rem] w-full overflow-hidden">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody className="relative flex flex-col justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      </div>
      
    </Carousel>
    </section>
  );
}

export default TESTIMONIAL;
