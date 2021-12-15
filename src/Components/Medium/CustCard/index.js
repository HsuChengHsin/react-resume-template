import React from "react";
import { Card, Image } from "semantic-ui-react";

const CustCard = ({ categories, src, header, description, date }) => {
  return (
    <div style={{ display: "inline-block", gap: "1rem", margin: "2rem" }}>
      <Card>
        <Image src={src} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          <Card.Description>
            <span
              style={{
                display: "-webkit-box",
                "-webkit-line-clamp": "3",
                "-webkit-box-orient": "vertical",
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
          <div style={{ float: "right", marginRight: "1rem" }}>
            <span className="date">{date}</span>
          </div>
        </Card.Meta>
        <Card.Content extra>
          <div style={{ overflow: "hidden" }}>
            {categories.map((c) => (
              <span key={c} style={{ marginRight: "0.5rem" }}>
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
