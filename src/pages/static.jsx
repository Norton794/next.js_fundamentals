import Layout from "../components/Layout";

export function getStaticProps() {
  return {
    props: { numero: Math.random() },
  };
}

export default function Static({numero}) {
  return <Layout title="Static Content">{numero}</Layout>;
}
