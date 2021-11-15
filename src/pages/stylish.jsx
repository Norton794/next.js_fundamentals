import styles from "../styles/Stylish.module.css"
import Layout from "../components/Layout";
export default function Stylish() {
    return (
        <Layout>
            <div className={styles.purple}>
                <h1>Stylizing using css modules</h1>
            </div>
        </Layout>
    );


}