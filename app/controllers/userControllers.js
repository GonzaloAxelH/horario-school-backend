const getUsers =  (req, res) => {
        res.send({ data:['users']}) 
}

const getUser = (req, res) => {
        res.send({ data: ["getUser"]}) 
        console.log('getUser recibido');
    }

 const createUser = (req, res) => {
        res.send({ state: ['ok']}) 
        console.log(req.body);
    }

const updateUser = (req, res) => {
        res.send({ data: ["updateUser"]}) 
        console.log('updateUsers recibido');
    }

const deleteUser = (req, res) => {
        res.send({ data: ["deleteUser"]}) 
        console.log('deleteUser recibido');
    }


module.exports = { getUser,getUsers,deleteUser,updateUser,createUser}