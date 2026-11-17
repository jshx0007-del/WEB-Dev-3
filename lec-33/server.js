const bcrypt= require('bcrypt');
const password = "ABC*123";
// const pass2="ABC*123";

const hashedPassword = async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt: ",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password: ",hashedPassword);

    const isMatch= await bcrypt.compare("ABC*123",hashedPassword);
    console.log("Password Match: ",isMatch);
}
hashedPassword(password);
// hashedPassword(pass2);

