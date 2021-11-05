const getFortune = document.getElementById("fortuneCookie");
const compBtn= document.getElementById("complimentButton");

// const baseUrl= "http://localhost:4000/api/"

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {   //function with param of randomCompliment
          const data = response.data;
          alert(data);
        });
  };

getFortune.addEventListener("click", () => {
    axios
        .get("http://localhost:4000/api/compliment/")
        .then(function (res){
            const data = res.data;
            alert(data);
          });
});

