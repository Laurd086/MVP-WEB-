export const addTeste = async (formData: FormData) =>{ //ajuda no nome, para pegar informações. 
    "use server"
    let name= formData.get ("nome")
    let email= formData.get ("email") 
    console.log ("Form: " + name+ " " + email) 
} 