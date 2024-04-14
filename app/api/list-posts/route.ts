import {listPosts} from "@/services/files-service";

interface Post {
    id: String,
    name: String
}

/*
used for testing only
 */
export async function GET() {


    const list = await listPosts();

    return Response.json({results: {list}});

}