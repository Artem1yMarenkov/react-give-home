import useTitle from "../../hooks/useTitle";

export default function Home() {
    useTitle('Главная');
    return (<h2>Home</h2>);
}