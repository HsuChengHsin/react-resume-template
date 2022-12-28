import React, { useState, useEffect } from "react";
import axios from "axios";

export const useMedium = (username) => {
	const [state, setState] = useState({ data: {}, isFetched: false });

	const ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40${username}`;

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(ENDPOINT);
				setState({
					data,
					isFetched: true,
				});
			} catch (e) {}
		})();
	}, [username]);

	return { ...state };
};
