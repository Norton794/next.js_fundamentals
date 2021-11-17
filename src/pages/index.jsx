import Navigator from "../components/Navigator"
export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator destination="/stylish" name="Stylish" cor="#9400d3"/>
            <Navigator destination="/jsx" name="Jsx"/>
            <Navigator destination="/example" name="Example" cor="crimson"/>
            <Navigator destination="/cliente/2/1234" name="Client" cor="green"/>
            <Navigator destination="/state" name="State" cor="blue"/>
            <Navigator destination="/integration_1" name="Integration with the API" cor="#42a9a9"/>
            <Navigator destination="/static" name="Static" cor="#ffc194"/>
        </div>
    )
}