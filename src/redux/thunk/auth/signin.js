export const signinAction = ({password, email}) => {
    return async (dispatch) => {
        const promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/auth/signin', {
            method: "POST",
            body: JSON.stringify({
                password, email
            })
        });

        const json = await promise.json();

        console.log(json);
    }
}