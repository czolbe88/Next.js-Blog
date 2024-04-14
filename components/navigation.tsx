import Link from "next/link";
import styles from "./navigation.module.scss";
import Image from "next/image";

export const Navigation = () => {

    return (
        <div id={styles.navRoot}>
            <Image id={styles.profileImg} width={103} height={137} src={"/profile.jpg"} alt={"Profile image"}></Image>
            <h1><Link href={"/"}>About</Link></h1>
            <h1><Link href={"/list-posts"}>Writing</Link></h1>
        </div>
    )

}