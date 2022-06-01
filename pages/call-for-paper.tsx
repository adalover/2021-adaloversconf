import Layout from "@components/layout";
import Page from "@components/page";
import { CALL_FOR_PAPER } from '@lib/constants';

export default function CallForPaper() {
    const meta = {
        title: 'Call for paper',
        description: 'Evento AdaLoversConf 2021'
    };

    return (
        <Page meta={meta} fullViewport>
            <Layout hideNav={true}>
                <iframe
                    src={CALL_FOR_PAPER}
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