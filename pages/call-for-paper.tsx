import Layout from "@components/layout";
import Page from "@components/page";

export default function CallForPaper() {
    const meta = {
        title: 'Call for paper',
        description: 'Evento AdaLoversConf 2021'
    };

    return (
        <Page meta={meta} fullViewport>
            <Layout hideNav={true}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScfCaXaXW1fGAANZ2WD49AMCSMYcKqxzqkKNcqIik6iQJS69Q/viewform?embedded=true"
                    width="640"
                    height="947"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}>
                    Cargando…
                </iframe>
            </Layout>
        </Page>
    );
}