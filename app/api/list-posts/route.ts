import {listImages} from "@/services/files-service";

interface Post {
    id: String,
    name: String
}

/*
used for testing only
 */
export async function GET() {


    // const listByName = await listImagesByName("post-1-image-2.png");
    const listAllImages = await listImages();

    return Response.json({results: {listAllImages}});

}