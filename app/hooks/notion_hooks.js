import { notion } from "../config/notion";
import { cache } from "react";
export const revalidate = 60;
export const useNotion = () => {
  const getAll = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.NOTION_DB,
        filter: {
          property: "Status",
          select: {
            equals: "Live",
          },
        },
      });
    } catch (e) {
      return [];
    }
  });

  const getCategories = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.CATEGORY_DB,
        filter: {
          property: "Status",
          select: {
            equals: "Categories",
          },
        },
      });
    } catch (e) {
      return [];
    }
  });

  const getChild = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.NOTION_DB,
        filter: {
          and: [
            {
              property: "Status",
              select: {
                equals: "Live",
              },
            },
            {
              property: "child",
              checkbox: {
                equals: true,
              },
            },
          ],
        },
      });
    } catch (e) {
      return [];
    }
  });

  const getLatest = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.NOTION_DB,
        filter: {
          and: [
            {
              property: "Status",
              select: {
                equals: "Live",
              },
            },
            {
              property: "latest",
              checkbox: {
                equals: true,
              },
            },
          ],
        },
      });
    } catch (e) {
      return [];
    }
  });

  const getOldPosts = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.NOTION_DB,
        filter: {
          and: [
            {
              property: "Status",
              select: {
                equals: "Live",
              },
            },
            {
              property: "latest",
              checkbox: {
                equals: true,
              },
            },
            {
              property: "child",
              checkbox: {
                equals: false,
              },
            },
          ],
        },
      });
    } catch (e) {
      return [];
    }
  });

  return {
    getAll,
    getCategories,
    getChild,
    getLatest,
    getOldPosts,
  };
};
