"use client";

import React from "react";
import Image from "next/image";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Carousel, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  HeartIcon,
  PuzzlePieceIcon,
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";
import CategoryCard from "@/components/category-card";

export function OutImpressiveStats() {
  return (
    <section className="container mx-auto px-8 py-12 lg:py-24" id="produk">
      <div className="container mx-auto text-center lg:text-left">
        <div className="mb-6 grid">
          <Typography variant="h6" color="white">
            Koleksi Lezat yang Memikat Selera
          </Typography>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-5 font-bold text-[#a4644c]"
          >
            Produk Galeri
          </Typography>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/4 w-full">
            <Card
              shadow={false}
              className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  Roti yang Memikat Pandangan dan Lidah Anda!
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  AdonanPremium
                </Typography>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="AdonanPremium"
                  className="border-2 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </CardBody>
            </Card>
          </div>
          <div className="lg:w-3/4 w-full my-10 lg:my-0 lg:pl-8">
          <Tabs id="custom-animation" value="Croissant">
            <TabsHeader className="bg-[#e7c0b2]">
              {/* {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))} */}
              <Tab key="Croissant" value="Croissant" className="lg:text-base text-xs">
                Croissant
              </Tab>

              <Tab key="Muffin" value="Muffin" className="lg:text-base text-xs">
                Muffin
              </Tab>

              <Tab key="Bagel" value="Bagel" className="lg:text-base text-xs">
                Bagel
              </Tab>

              <Tab key="Breadstick" value="Breadstick" className="lg:text-base text-xs">
                Breadstick
              </Tab>

              <Tab key="Baguette" value="Baguette" className="lg:text-base text-xs">
                Baguette
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
                <TabPanel key="Croissant" value="Croissant">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1479894127662-a987d1e38f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJyZWFkJTIwY3JvaXNzYW50JTIwY2hvY29sYXRlfGVufDB8fDB8fHww"
                        icon={HeartIcon}
                        title="Croissant Coklat"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1626920369764-4c90a01fe697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWQlMjBjcm9pc3NhbnQlMjBzdHJhd2JlcnJpZXN8ZW58MHx8MHx8fDA%3D"
                        icon={HeartIcon}
                        title="Croissant Strawberry"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyZWFkJTIwY3JvaXNzYW50JTIwYWxtb25kfGVufDB8fDB8fHww"
                        icon={HeartIcon}
                        title="Croissant Kacang Almond"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1548084565-6f53669c58ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWQlMjBjcm9pc3NhbnQlMjB2YW5pbGxhfGVufDB8fDB8fHww"
                        icon={HeartIcon}
                        title="Croissant Vanila"
                        desc="$199,99"                
                      />
                    </div>
                  </div>
                  <Button variant="text" className="flex items-center float-right gap-2 text-white hover:text-black hover:bg-white my-9">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </TabPanel>

                <TabPanel key="Baguette" value="Baguette">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1413745000559-46fdd2d81cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWQlMjBiYWd1ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
                        icon={HeartIcon}
                        title="Baguette Tawar"
                        desc="$199,99"                
                      />
                      {/* <Card className="relative grid min-h-[31.5rem] w-full overflow-hidden">
                        <Image
                          width={768}
                          height={768}
                          src="https://images.unsplash.com/photo-1413745000559-46fdd2d81cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWQlMjBiYWd1ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Baguette Tawar"
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70" />
                        <CardBody className="relative flex flex-col justify-between">
                          <HeartIcon className="h-8 w-8 text-white" />
                          <div>
                            <Typography variant="h5" className="mb-1" color="white">
                              Baguette Tawar
                            </Typography>
                            <Typography color="white" className="text-xs font-bold opacity-50">
                            </Typography>
                          </div>
                        </CardBody>
                      </Card> */}
                    </div>
                  </div>
                  <Button variant="text" className="flex items-center float-right gap-2 text-white hover:text-black hover:bg-white my-9">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </TabPanel>

                <TabPanel key="Bagel" value="Bagel">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWQlMjBiYWdlbHxlbnwwfHwwfHx8MA%3D%3D"
                        icon={HeartIcon}
                        title="Riestainiai"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1651248341193-a4035e081fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWQlMjBiYWdlbHxlbnwwfHwwfHx8MA%3D%3D"
                        icon={HeartIcon}
                        title="Vesirinkeli"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1645995884824-8a7230f158f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFkJTIwYmFnZWx8ZW58MHx8MHx8fDA%3D"
                        icon={HeartIcon}
                        title="Beugel"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1611605848036-382aa4335ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJyZWFkJTIwYmFnZWx8ZW58MHx8MHx8fDA%3D"
                        icon={HeartIcon}
                        title="Covrigi"
                        desc="$199,99"                
                      />
                    </div>
                  </div>
                  <Button variant="text" className="flex items-center float-right gap-2 text-white hover:text-black hover:bg-white my-9">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </TabPanel>

                <TabPanel key="Breadstick" value="Breadstick">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://plus.unsplash.com/premium_photo-1670845441374-d284ec69ed84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJlYWRzdGlja3N8ZW58MHx8MHx8fDA%3D"
                        icon={HeartIcon}
                        title="Sesame seed breadstick "
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://plus.unsplash.com/premium_photo-1668622419261-9ca0a4b25f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWRzdGlja3N8ZW58MHx8MHx8fDA%3D"
                        icon={HeartIcon}
                        title="Breadstick Original "
                        desc="$199,99"                
                      />
                    </div>
                  </div>
                  <Button variant="text" className="flex items-center float-right gap-2 text-white hover:text-black hover:bg-white my-9">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </TabPanel>

                <TabPanel key="Muffin" value="Muffin">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://plus.unsplash.com/premium_photo-1664300258641-f21dd7792f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11ZmZpbiUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                        icon={HeartIcon}
                        title="Muffin Coklat"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://plus.unsplash.com/premium_photo-1674819647798-6e5a54055c87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVmZmlufGVufDB8fDB8fHww"
                        icon={HeartIcon}
                        title="Muffin Strawberry"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmlufGVufDB8fDB8fHww"
                        icon={HeartIcon}
                        title="Muffin Blueberry"
                        desc="$199,99"                
                      />
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
                      <CategoryCard 
                        img="https://plus.unsplash.com/premium_photo-1667725741016-4568913d122e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVmZmluJTIwdmFuaWxsYXxlbnwwfHwwfHx8MA%3D%3D"
                        icon={HeartIcon}
                        title="Muffin Vanila"
                        desc="$199,99"                
                      />
                    </div>
                  </div>
                  <Button variant="text" className="flex items-center float-right gap-2 text-white hover:text-black hover:bg-white my-9">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </TabPanel>
            </TabsBody>
          </Tabs>
            {/* <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
              {STATS.map((props, key) => (
                <StatsCard key={key} {...props} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;