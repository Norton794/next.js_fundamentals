import { useState } from "react";
import Layout from "../components/Layout";
export default function State() {
    const [number, setNumber] = useState(0)
  return (
    <Layout title="Component with State">
      <div>{number}</div>
      <button onClick={()=>setNumber(curr=>curr+1)}>Inc</button>
    </Layout>
  );
}
