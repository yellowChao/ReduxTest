export async function get(url) {
  const uri = encodeURI(url)
  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(filterStatus).then(filterJSON)
}

export async function post(url, body) {
  const uri = encodeURI(url)
  return fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then(filterStatus).then(filterJSON)
}

function filterStatus(res) {
  if (res.status / 100 === 2) {
    return res
  }
  const error = new Error()
  error.res = res
  throw error
}

function filterJSON(res) {
  return res.json()
}
