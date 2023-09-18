import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import Link from "next/link";
import Image from "next/image";

export const serialize = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // if (node.italic) {
      //   value = <Image src={value.url} alt="image" height={300} width={300} key={i}/>;
      // }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "linebreak":
        return `<br>`;
      case "h1":
        return <h1 key={i}>{serialize(node.children)}</h1>;
      case "h2":
        return <h2 key={i}>{serialize(node.children)}</h2>;
      case "h3":
        return <h3 key={i}>{serialize(node.children)}</h3>;
      case "h4":
        return <h4 key={i}>{serialize(node.children)}</h4>;
      case "h5":
        return <h5 key={i}>{serialize(node.children)}</h5>;
      // Iterate through all headings here...
      case "h6":
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case "blockquote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;

      case "upload":
        return (
          <Image
            src={node.value.url}
            alt={node.value.original_doc.filename}
            height={300}
            width={300}
            key={i}
          />
        );
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });
