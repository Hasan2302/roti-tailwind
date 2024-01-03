"use client";

import { Avatar, Card, CardBody, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Unlock the Web Foundation",
    label: "from $99",
    desc: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Craft Websites That Adapt",
    label: "from $199",
    desc: "Our Responsive Design course teaches you the art of creating websites that seamlessly adapt to different devices and screen sizes.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Master the Power of React",
    label: "from $499",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build interactive, dynamic web applications.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 35 Classes • 400 Students",
    title: "Frontend Essentials Course",
    label: "from $49",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Streamline Your CSS Workflow",
    label: "from $99",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Medium • 33 Classes • 690 Students",
    title: "Master Backend Development",
    label: "from $299",
    desc: "Dream of becoming a backend developer? Our intensive one-month Node.js course is your fast track to achieving that goal.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8" id="keunggulan-produk">
      <div className="container mx-auto mb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-6">
          <Card className="relative grid min-h-[17rem] w-full overflow-hidden bg-transparent">
            <CardBody className="relative flex flex-col justify-between">
              <Typography variant="h6" color="white" className="lg:mb-4 mb-2 lg:text-xl text-xs">
                Keunggulan Produk
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold text-3xl text-[#FFB000]"
              >
                DENGAN BAHAN ADONAN PREMIUM ASLI
              </Typography>
              <Typography className="mb-1 w-full lg:text-base text-sm font-normal !text-gray-500">
              Roti Harmoni Nusantara adalah persembahan unik yang menggabungkan kelezatan rasa dan kekayaan sejarah dalam setiap produknya. Berikut adalah rangkaian keunggulan produk yang menjadikan Roti Harmoni Nusantara pilihan tak terbantahkan:
              </Typography>
            </CardBody>
          </Card>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <Card className="relative grid min-h-[17rem] w-full overflow-hidden bg-transparent">
              <List>
                <ListItem className="!bg-transparent">
                  <ListItemPrefix className="lg:block hidden">
                    <Avatar variant="circular" className="w-28" alt="candice" src="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoeSUyMGZvb2QlMjBsb2dvfGVufDB8fDB8fHww" />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" className="text-[#deb887]">
                    Bebas Bahan Pengawet dan Pewarna
                    </Typography>
                    <Typography variant="small" className="font-normal !text-gray-500">
                    Kami mengutamakan kesehatan Anda dengan menghadirkan produk bebas bahan pengawet dan pewarna buatan, memberikan kepercayaan bahwa setiap gigitan adalah pilihan yang baik untuk tubuh Anda.
                    </Typography>
                  </div>
                </ListItem>
                <ListItem className="!bg-transparent">
                  <ListItemPrefix className="lg:block hidden">
                    <Avatar variant="circular" className="w-28" alt="alexander" src="https://images.unsplash.com/photo-1612012060851-20f943c02d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsYW5jZSUyMHNjYWxlfGVufDB8fDB8fHww" />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" className="text-[#deb887]">
                    Kandungan Nutrisi Seimbang
                    </Typography>
                    <Typography variant="small" className="font-normal !text-gray-500">
                    Diformulasikan dengan cermat untuk memberikan kandungan nutrisi seimbang, roti ini merupakan sumber karbohidrat kompleks, protein, dan lemak sehat, mendukung pola makan sehat dan aktifitas fisik.
                    </Typography>
                  </div>
                </ListItem>
                <ListItem className="!bg-transparent">
                  <ListItemPrefix className="lg:block hidden">
                    <Avatar variant="circular" className="w-28" alt="emma" src="https://images.unsplash.com/photo-1639667051433-568f35be2003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbGljaW91cyUyMGJyZWFkfGVufDB8fDB8fHww" />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" className="text-[#deb887]">
                    Tekstur Lezat dan Kerenyahan Tahan Lama
                    </Typography>
                    <Typography variant="small" className="font-normal !text-gray-500">
                    Rasakan kelembutan dan kerenyahan roti yang tahan lama, menjadikan pengalaman makan Anda lebih memuaskan. Cocok untuk dinikmati dengan berbagai pilihan selai.
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreCourses;
