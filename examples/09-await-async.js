function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" })
        }, 5000);
    });
}

async function fetchUser() {
    let response = await getUser();
    console.log(response);
}
