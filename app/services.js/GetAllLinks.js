var linkArry = []
const url = 'http://192.168.1.104:3000/getAll';



export default function GetAllLinks() {
    fetch(url)
    .then((value)=>value.json(), (errReason)=>{
        console.log(errReason);
    })
    .then((jsonval)=>{
        return jsonval.arr
    })
}