import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import {Post} from "@/interfaces/interfaces";


export async function parseMarkdown(rawStr: string): Promise<Post> {

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(rawStr);

    const title: string = matterResult.data.title;
    const date: string = matterResult.data.date;
    const category: string = matterResult.data.category;

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const htmlContent = processedContent.toString();

    return {
        title,
        date,
        category,
        htmlContent
    }

}