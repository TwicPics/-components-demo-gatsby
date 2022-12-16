/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code } from "../../components/code";
import { TwicAbstract } from "../../components/demo-wrapper/twicAbstract";
import { TwicWrapper } from "../../components/demo-wrapper/twicWrapper";
import { TwicVideo } from "@twicpics/components/react";
import "./index.scss";

const TwicShortVideos = () => {
  return (
    <div id="twic-short-videos-container">
      <TwicWrapper gitHubUrl="src/lib/twicShortVideos/index.jsx">
        <TwicAbstract title="Short Videos">
          <p>
            The ideal candidates for TwicPics video integration are hero videos,
            product videos, and thumbnails.
          </p>
          <p>
            All videos generated by the TwicPics API are muted, to be looped and
            played automatically. You can think of them as GIFs, but with high
            quality.
          </p>
          <p>
            The TwicVideo component automatically handles CLS, LQIP and the
            display of a generated poster until the video is actually viewable.
          </p>
          <p>
            This feature is available{" "}
            <strong>for all our Pro and Enterprise customers</strong>.
          </p>
          <br />
          Here the properties used in this example:
          <ul>
            <li>
              <Code>intrinsic</Code>:
              <span>
                prevents video upscaling and limits the number of generated
                variants.
              </span>
            </li>
            <li>
              <Code>focus</Code>:
              <span>changes the focus point coordinates of the image.</span>
            </li>
            <li>
              <Code>mode</Code>:
              <span>
                determines if the image fills or sits inside the area.
              </span>
            </li>
            <li>
              <Code>placeholder</Code>:
              <span>
                helps optimize your CLS and implement the LQIP technique.
              </span>
            </li>
            <li>
              <Code>ratio</Code>:
              <span>
                &nbsp; determines the value of the width/height ratio of the
                image display area.
              </span>
            </li>
          </ul>
        </TwicAbstract>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicVideo
              src="video/skater.mp4"
              intrinsic="1280x720"
              placeholder="preview"
              ratio="16/9"
            />
            <span>
              <Code>ratio="16/9"</Code>&<Code>mode="cover"</Code>: the video
              fills the area
            </span>
          </div>
          <div className="twic-item">
            <TwicVideo
              src="video/skater.mp4"
              focus="center"
              intrinsic="1280x720"
              mode="cover"
              placeholder="maincolor"
            />
            <span> Default values </span>
          </div>
          <div className="twic-item">
            <TwicVideo
              src="video/skater.mp4"
              intrinsic="1280x720"
              placeholder="meancolor"
              mode="contain"
              ratio="1"
            />
            <span>
              <Code>ratio="1"</Code>&<Code>mode="contain"</Code>: the video sits
              inside the area
            </span>
          </div>
          <div className="twic-item">
            <TwicVideo
              src="video/skater.mp4"
              intrinsic="1280x720"
              placeholder="preview"
              ratio="2/3"
            />
            <span>
              <Code>ratio="2/3"</Code>,<Code>mode="cover"</Code>: the video
              fills the area
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};

export default TwicShortVideos;
