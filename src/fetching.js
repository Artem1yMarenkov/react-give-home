const URL = `https://fathomless-gorge-97474.herokuapp.com/post`

const token = localStorage.getItem('token')

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
      answer.json()
      if (answer.status === 400) alert('SAVE_POST_ERROR')
      if (answer.status === 200) alert('SAVE_POST_SUCCESS')
    })
    .catch((err) => alert(err))
}

export function fetchingDelete(action, id) {
    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(action),
    })
        .then((answer) => {
            console.log(answer)
            answer.json()
            if (answer.status === 400) alert('SAVE_POST_ERROR')
            if (answer.status === 200) alert('SAVE_POST_SUCCESS')
        })
        .catch((err) => alert(err))
}
