import {exportFileAs, getFileById} from "@/services/files-service";
import {parseMarkdown} from "@/services/markdown-service";
import styles from "./page.module.scss";

interface PageProps {
    params: { slug: string },
    searchParams: { shouldExport: string }
}

export default async function Page(props: PageProps) {

    let raw: string = "";
    if (props.searchParams.shouldExport == "true") {
        raw = await exportFileAs(props.params.slug, "text/plain");
    } else {
        raw = await getFileById(props.params.slug)
    }
    const parsedMd = await parseMarkdown(raw)
    return (
        <div>
            <div className={styles.postHeader}>
                <h1>{parsedMd.title}</h1>
                {/*<p>{parsedMd.category}</p>*/}
            </div>

            <div dangerouslySetInnerHTML={{__html: parsedMd.htmlContent}}/>
        </div>
    )

}