export default function Jsx() {
    const a = 2;
    const b = 3;
    return (
        <div>
            <h1>Jsx é um conceito central!</h1>
            <p>{a * b}</p>
            <p>{JSON.stringify({ nome: "sdfdfs", idade: 21 })}</p>
        </div>
    );
}