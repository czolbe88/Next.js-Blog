import {listPosts} from "@/services/files-service";
import {PostMetada} from "@/interfaces/interfaces";
import Link from "next/link";
import styles from "./page.module.scss";

const post = async () => {

    const posts = await listPosts();

    return (<div>
        {/*<h1>Writing</h1>*/}
        <div>
            {posts.map(
                (post: PostMetada) => {
                    return (
                        post.shouldDisplay ? <div key={`post-${post.id}`} className={styles.post}>
                            <h2>
                                <Link href={`posts/${post.id}`}>{post.name}</Link>
                            </h2>
                        </div>: null
                    )
                }
            )}
        </div>

    </div>)

}

export default post;