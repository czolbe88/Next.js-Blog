import {exportFile, getFile} from "@/services/files-service";
import {parseMarkdown} from "@/services/markdown-service";

interface PageProps {
    params: { slug: string },
    searchParams: { shouldExport: string }
}

export default async function Page(props: PageProps) {

    let raw: string = "";
    if (props.searchParams.shouldExport == "true") {
        raw = await exportFile(props.params.slug);
    } else {
        raw = await getFile(props.params.slug)
    }
    const parsedMd = await parseMarkdown(raw)
    return <div>
        <div dangerouslySetInnerHTML={{__html: parsedMd.htmlContent}}/>
    </div>

}