import Layout from "../../../components/Layout";
import {useRouter} from 'next/router';
export default function ClientByCode() {
    const router = useRouter()
    return (
        <Layout title="Dinamic Navigation">
            <span>{router.query.code}</span>
            <span>{router.query.location}</span>
        </Layout>
    )
}