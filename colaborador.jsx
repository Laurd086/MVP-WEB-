import { addTeste } from "@/app/lib/action";

export default function FormColaborador (){
  return(
   <form action = {addTeste}>
    <div>
       <label>
        Nome:
        <input type="text" name= "nome" />
      </label>
    </div>
    <div>
        <label>
            Email: 
            <input type="email" name= "email" />
        </label>
    </div>
    <button> Cadastrar </button>
   </form>
   )
}