import React from "react";
import { Card, Image } from "semantic-ui-react";

const CustCard = ({ categories, src, header, description, date, onClick }) => {
  return (
    <div className="mx-auto" onClick={onClick}>
      <Card>
        <Image src={src} ui={true} style={{ minHeight: "10rem" }} />
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          <Card.Description>
            <span
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                lineClamp: "3",
                boxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </span>
          </Card.Description>
        </Card.Content>
        <Card.Meta>
          <div className="float-right" style={{ marginRight: "1rem" }}>
            <span className="date">{date}</span>
          </div>
        </Card.Meta>
        <Card.Content extra>
          <div className="overflow-hidden">
            {categories.map((c) => (
              <span className="mr-2" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CustCard;
