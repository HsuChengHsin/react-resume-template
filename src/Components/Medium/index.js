import React from "react";
import { useMedium } from "./hooks";
import CustCard from "./CustCard";

const Medium = ({ username }) => {
  const {
    data: { items },
    isFetched,
  } = useMedium(username);

  console.log(items);
  if (!isFetched) {
    return null;
  }

  return (
    <section id="medium">
      <div className="row align-center">
        {items.map(({ categories, description, title, thumbnail, pubDate }) => (
          <CustCard
            categories={categories}
            key={title}
            src={thumbnail}
            date={pubDate}
            description={description}
            header={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Medium;
