const getFortune = document.getElementById("fortuneCookie");
const compBtn= document.getElementById("complimentButton");
const getQuery = document.getElementById("getQuerySubmit");
// const baseUrl= "http://localhost:4000/api/"

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {   //function with param of randomCompliment
          const data = response.data;
          alert(data);
        });
  };
document.getElementById("fortuneCookie").onclick = function () {
// getFortune.addEventListener("click", () => {
    axios
        .get("http://localhost:4000/api/compliment/")
        .then(function (res){
            const data = res.data;
            alert(data);
          });
};


getQuery.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/compliment/?item=${queryInput.value}`)
        .then(function (res){
            const data = res.data;
            alert(data);
          });
})