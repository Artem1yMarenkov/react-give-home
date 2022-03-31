import useTitle from "../../hooks/useTitle"

export default function NoMatch() {
    useTitle('Ошибка 404');
    return (
        <h1>404</h1>
    )
}