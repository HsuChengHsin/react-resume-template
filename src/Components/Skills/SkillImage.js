import React from "react";
import { Image } from "semantic-ui-react";

export default ({ src }) => (
	<Image style={{ padding: "2rem" }} src={src} bordered rounded />
);
