import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

// https://docs.astro.build/en/recipes/reading-time/
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage, {
      wordsPerMinute: 180, // Defaults to 200
    });
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
