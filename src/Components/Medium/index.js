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
      <div className="row my-10">
        <div className="section-head align-center">
          <h1>
            <span>Blogs.</span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 place-content-center">
          {items.map(
            ({ categories, description, title, thumbnail, pubDate, link }) => {
              let tmp = document.createElement("div");
              tmp.innerHTML = description;
              return (
                <CustCard
                  onClick={() => (window.location.href = link)}
                  categories={categories}
                  key={title}
                  src={thumbnail}
                  date={pubDate}
                  description={tmp.textContent || tmp.innerText || ""}
                  header={title}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Medium;
