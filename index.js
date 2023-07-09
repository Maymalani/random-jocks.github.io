const btn = document.getElementById("jokesBtn");

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();
        document.getElementById("root").innerHTML = `😄 ${data.joke}`;
    } catch (err) {
        console.log(`Error : ${err}`);
    }
}

btn.addEventListener("click", generateJokes);