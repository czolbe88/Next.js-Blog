import driveService from "@/services/drive-service";
import {GaxiosResponse} from "gaxios";
import {PostMetada} from "@/interfaces/interfaces";

//Alexiad
const mainFolder = process.env.MAIN_FOLDER_ID;
//Alexiad > Pages
const pagesFolder = process.env.PAGES_FOLDER_ID;
//Alexiad > Posts
const postsFolder = process.env.POSTS_FOLDER_ID;


const listPosts = async () => {
    const fields = 'nextPageToken, files(id, name, createdTime, webContentLink, size, trashed, mimeType)';
    const posts = await driveService.files.list({
        q: `\'${postsFolder}\' in parents`,
        fields,
        spaces: 'drive',
        orderBy: 'createdTime',
    });
    const postMetadataList = posts.data.files as unknown as PostMetada[];
    postMetadataList.forEach(meta => {
        if ("text/markdown" == meta.mimeType) {
            meta.shouldDisplay = true;
        }
    })
    return postMetadataList;
}

const getFile = async (id: String) => {
    // @ts-ignore
    const file: GaxiosResponse = await driveService.files.get({fileId: id, alt: "media"});
    return file.data as string;
}


export {listPosts, getFile};

