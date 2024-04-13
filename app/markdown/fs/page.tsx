import * as fs from "node:fs";
import {remark} from 'remark';
import html from 'remark-html';
import matter from "gray-matter";

const markdownSamplePage = async () => {

    // path is relative to where the script was started from
    const fileContents = fs.readFileSync("./markdown/posts/this is a sample1", 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const title: String = matterResult.data.title;

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();


    return (<div dangerouslySetInnerHTML={{__html: contentHtml}}/>);
}


export default markdownSamplePage;