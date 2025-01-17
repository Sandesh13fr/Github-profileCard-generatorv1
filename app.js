let Url;
let userName
let data

document.getElementById("submit").addEventListener("click",()=>{
    userName = document.getElementById("userName").value;
    Url = "https://api.github.com/users/"+userName
    let getData = new XMLHttpRequest()
    getData.open("GET",Url)
    getData.onreadystatechange = function(){
    if (getData.readyState === 4) {
        data=JSON.parse(this.response)
        if (data.message?.toLowerCase() ==="not found") {
            document.getElementById("message").textContent="Invalid username!!"
        }else{
            console.log(data);
            addDATA();
            document.getElementById("profileLink").addEventListener("click", () => {
                window.open(data.html_url, "_blank");
            });
        }
    }
}
getData.send();

})
document.getElementById("reset").addEventListener("click",resetfields)
function addDATA(){
    // document.getElementById("getData").style.display="none";
    document.getElementById("userName").setAttribute("disabled","true");
    document.getElementById("card1").style.display="flex"
    document.getElementById("card2").style.display="flex"
    document.getElementById("image").setAttribute("src",data.avatar_url)
    document.getElementById("name").textContent=data.name
    document.getElementById("username").textContent=data.login
    document.getElementById("repoCount").textContent=data.public_repos
    document.getElementById("followers").textContent=data.followers
    document.getElementById("following").textContent=data.following
    document.getElementById("stats").setAttribute("src",`https://github-readme-stats.vercel.app/api?username=${data.login}&theme=nightowl&show_icons=true&hide_border=true&count_private=true`)
    document.getElementById("streak").setAttribute("src",`https://github-readme-streak-stats.herokuapp.com/?user=${data.login}&theme=nightowl&hide_border=true`)
    document.getElementById("langs").setAttribute("src",`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.login}&theme=nightowl&show_icons=true&hide_border=true&layout=compact`)
}

function resetfields(){
    document.getElementById("userName").removeAttribute("disabled");
    document.getElementById("card1").style.display="none"
    document.getElementById("card2").style.display="none"
}
