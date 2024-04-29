import driveService from "@/services/drive-service";
import {GaxiosResponse} from "gaxios";
import {ImageMetada, PostMetada} from "@/interfaces/interfaces";

//Alexiad
const mainFolder = process.env.MAIN_FOLDER_ID;
//Alexiad > Pages
const pagesFolder = process.env.PAGES_FOLDER_ID;
//Alexiad > Posts
const postsFolder = process.env.POSTS_FOLDER_ID;
const imagesFolder = process.env.IMAGES_FOLDER_ID;

const listPosts = async () => {
    const fields = 'nextPageToken, files(id, name, createdTime, size, trashed, mimeType)';
    const posts = await driveService.files.list({
        q: `\'${postsFolder}\' in parents`,
        fields,
        spaces: 'drive',
        orderBy: 'createdTime desc',
    });
    return posts.data.files as unknown as PostMetada[];
}

const listImages = async () => {
    const fields = 'nextPageToken, files(id, name, createdTime, thumbnailLink , size, trashed, mimeType)';
    const images = await driveService.files.list({
        q: `\'${imagesFolder}\' in parents`,
        fields,
        spaces: 'drive',
        orderBy: 'createdTime desc',
    });
    images.data.files?.forEach(
        file => {
            file.thumbnailLink = file.thumbnailLink?.replace("=s220", "");
        }
    )
    return images.data.files as unknown as ImageMetada[];
}

const listImagesByName = async (name: string) => {
    const fields = 'nextPageToken, files(id, name, createdTime, thumbnailLink , size, trashed, mimeType)';
    const images = await driveService.files.list({
        q: `name = \'${name}\'`,
        fields,
        spaces: 'drive',
        orderBy: 'createdTime desc',
    });
    images.data.files?.forEach(
        file => {
            file.thumbnailLink = file.thumbnailLink?.replace("=s220", "");
        }
    )
    return images.data.files as unknown as ImageMetada[];
}

const getFileById = async (id: String) => {
    // @ts-ignore
    const file: GaxiosResponse = await driveService.files.get({fileId: id, alt: "media"});
    return file.data as string;
}

const getDataUrlFromImageUrl = async(imageUrl: string) => {
    let response = await fetch(imageUrl);
    let blob = await response.blob();
    let buffer = Buffer.from(await blob.arrayBuffer());
    return "data:" + blob.type + ';base64,' + buffer.toString('base64');
}

// const blobToBase64 = (blob:Blob) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     return new Promise(resolve => {
//         reader.onloadend = () => {
//             resolve(reader.result);
//         };
//     });
// };

const exportFileAs = async (id: String, mimeType: String) => {
    //@ts-ignore
    const file: GaxiosResponse = await driveService.files.export({fileId: id, mimeType})
    return file.data as string;
}


export {listPosts, listImages, getFileById, exportFileAs, listImagesByName, getDataUrlFromImageUrl};

