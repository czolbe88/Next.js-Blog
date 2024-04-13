import {getFile} from "@/services/files-service";
import {parseMarkdown} from "@/services/markdown-service";

interface PageProps {
    params: { slug: string }
}

export default async function Page(props: PageProps) {

    const raw = await getFile(props.params.slug)
    console.log({raw})
    const parsedMd = await parseMarkdown(raw)

    return <div>

        <div dangerouslySetInnerHTML={{__html: parsedMd.htmlContent}}/>


    </div>

}