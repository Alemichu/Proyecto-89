function addUser()
{
    username1 = document.getElementById("username1").value;
    username2 = document.getElementById("username2").value;

    localStorage.setItem("USERNAME1", username1);
    localStorage.setItem("USERNAME2", username2);

    window.location("#")
}