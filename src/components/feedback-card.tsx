import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card placeholder="Isi disini" shadow={false} className="items-start text-left">
      <CardBody placeholder="Isi disini">
        <Avatar placeholder="Isi disini" src={img} className="mb-2" alt={client} size="xl" />
        <Typography placeholder="Isi disini" variant="h6" color="blue-gray">
          {client}
        </Typography>
        <Typography placeholder="Isi disini"
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-normal"
        >
          {title}
        </Typography>
        <Typography placeholder="Isi disini"
          variant="paragraph"
          className="mb-6 font-normal text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating placeholder="Isi disini" value={5} readonly />
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;