import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem("read-list");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        console.log(id,"already exixts in the read list")
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list",storedListStr);
        toast("This book is added to your read-list.")
    }
}
    export {addToStoredReadList,getStoredReadList}
