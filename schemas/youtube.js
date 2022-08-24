/* eslint-disable react/prop-types */
import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

import styles from "./../styles/styles.css";

const Preview = ({ value }) => {
    const { url } = value;
    const id = getYouTubeId(url);
    return (
        <YouTube
            className={styles.wfull}
            iframeClassName={styles.wfull}
            videoId={id}
        />
    );
};

export default {
    name: "youtube",
    type: "object",
    title: "YouTube Embed",
    fields: [
        {
            name: "url",
            type: "url",
            title: "YouTube video URL",
        },
    ],
    preview: {
        select: {
            url: "url",
        },
        component: Preview,
    },
};
