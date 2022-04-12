export const signupAction = ({login, password, email}) => {
    return async (dispatch) => {
        console.log('start fetching')
        let promise;
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/auth/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    login, password, email
                })
            });
        } catch {
            console.log("fetch error!");
        }

        const json = await promise.json();

        console.log("response ->", json);
    }
}