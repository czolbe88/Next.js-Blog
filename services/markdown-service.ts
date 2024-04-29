import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import {Post} from "@/interfaces/interfaces";
import {parse} from "node-html-parser";
import {getDataUrlFromImageUrl, listImagesByName} from "@/services/files-service";

export async function parseMarkdown(rawStr: string): Promise<Post> {

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(rawStr);

    //convert all keys to lower case
    for (let key in matterResult.data) {
        let tmpVal = matterResult.data[key];
        delete matterResult.data[key];
        matterResult.data[key.toLowerCase()] = tmpVal;
    }

    const title: string = matterResult.data.title;
    // const date: string = matterResult.data.date;
    const category: string = matterResult.data.category;

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    let htmlContent = processedContent.toString();
    const parsedHtmlContent = parse(htmlContent);

    for (const img of parsedHtmlContent.querySelectorAll('img')) {
        let newSrc = "";
        let oldSrc = img.getAttribute("src")?.toString();
        if (oldSrc) {
            let images = await listImagesByName(oldSrc);
            // if (images.length > 0) {
            //     newSrc = `https://drive.google.com/thumbnail?id=${images[0].id}&sz=w1000`
            //     htmlContent = htmlContent.replaceAll(oldSrc, newSrc);
            // }
            if(images.length > 0){
                newSrc = await getDataUrlFromImageUrl(images[0].thumbnailLink);
                htmlContent = htmlContent.replaceAll(oldSrc, newSrc);
            }
        }
    }

    return {
        title,
        // date,
        category,
        htmlContent
    }

}