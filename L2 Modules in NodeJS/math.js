function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
// module.exports = "castor";
// module.exports = add;
// module.exports = sub;    it will only send sub means its overriding add to sub
//hence result in -3


//------ hence we are using object to export multiple functions

module.exports = data = {
    add,sub
}
