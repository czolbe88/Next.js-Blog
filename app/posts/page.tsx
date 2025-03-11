import {listPosts} from "@/services/files-service";
import {PostMetada} from "@/interfaces/interfaces";
import Link from "next/link";
import styles from "./page.module.scss";

export const fetchCache = 'force-no-store';
const post = async () => {

    const posts = await listPosts();
    const GOOGLE_APPS_DOC_TYPE = "application/vnd.google-apps.document";
    const ACCEPTED_MIME_TYPES = ["text/markdown", GOOGLE_APPS_DOC_TYPE]

    return (<div>
        {/*<h1>Writing</h1>*/}
        <div>
            {posts.map(
                (post: PostMetada) => {
                    return (
                        ACCEPTED_MIME_TYPES.includes(post.mimeType) ?
                            <div key={`post-${post.id}`} className={styles.post}>
                                <h2>
                                    <Link href={{
                                        pathname: `posts/${post.id}`,
                                        query: {shouldExport: post.mimeType == GOOGLE_APPS_DOC_TYPE}
                                    }} prefetch={true}>{post.name}</Link>
                                </h2>

                                <h3>{post.createdTime}</h3>
                            </div> : null
                    )
                }
            )}
        </div>

    </div>)

}

export default post;