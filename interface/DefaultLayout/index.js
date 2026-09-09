import Head from "next/head"
import { PageLayout, Header, Text } from "@primer/react"
import styles from "./index.module.css"

const contentWidthClasses = {
    small: styles.smallContent
}

export default function DefaultLayout({children, contentWidth, metadata = {}}) {

    const extrContentClassName = contentWidthClasses[contentWidth];

    return <>
        <Head>
            <title>
                {metadata.title ? `${metadata.title} - DomaDev` : 'DomaDev'}
            </title>
            {metadata.description && (
                <meta name="description" content={metadata.description} />
            )}
        </Head>

        <Header>
            <Header.Item full>
                <Header.Link href="/">DomaDev</Header.Link>
            </Header.Item>
            <Header.Item>
                <Header.Link href="/">Login</Header.Link>
            </Header.Item>
            <Header.Item>
                <Header.Link href="/register">Cadastrar</Header.Link>
            </Header.Item>
        </Header>
        <PageLayout>
            <PageLayout.Content width={contentWidth} className={extrContentClassName}>{children}</PageLayout.Content>
            <PageLayout.Footer divider="line">
                <Text size="small">
                    © {new Date().getFullYear()} DomaDev
                </Text>
            </PageLayout.Footer>
        </PageLayout>
    </>
}