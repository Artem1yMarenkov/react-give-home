const URL = `https://fathomless-gorge-97474.herokuapp.com/post`

const user = {
  password: 'Oleg',
  email: 'oleg@oleg.oleg',
}

const token = localStorage.getItem('key')

export function fetching(action) {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(action),
  })
    .then((answer) => {
      console.log(answer)
      console.log(answer.message)
      answer.json()
    })
    .then((ans) => {
      console.log(ans)
    })
}
