const URL="https://restcountries.com/v3.1/all";
const xhr= new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onreadystatechange=()=>{
    console.log(xhr.response);
};
xhr.onload=()=>{
    console.log(xhr.response);
};