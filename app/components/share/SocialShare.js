"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

function SocialShare({ urlLink, Title }) {
  return (
    <div className=" space-x-5">
      <TwitterShareButton url={urlLink} title={Title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={urlLink} quote={Title} hashtag={"#nextshare"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TelegramShareButton url={urlLink} title={Title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
}

export default SocialShare;
