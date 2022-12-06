const { request, response } = require("express");
const express = require("express");
const  cors = require("cors")
const { mostrarbien, insertarbien, actualizarbien, eliminarbien, mostrarbienporid } = require("./models/modelbien");

require('dotenv').config()


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.use(cors())

app.get("/",async(req,res)=>{
    let resp = await mostrarbien();
    res.json(resp)
})


app.get("/bien/:id", async(req,res)=>{
    let resp = await mostrarbienporid(req.params.id);
    try {
        res.json(resp) 
    } catch (e) {
        console.log(e);
    }
})

app.post("/bien",async(request,response)=>{
  try{
    await insertarbien(request.body);
    response.json({
        status: "201",
        message: "regitrado"
    })
  }
  catch(e){
    console.log(e);
    response.json({
        status: "400",
        message: "no insertado"
    })
  }
})


app.put("/bien",async(request,response)=>{
    try{
        await actualizarbien(request.body)
        response.json({
            status: "201",
            message: "actualizados"
        })
      }
    catch(e){
        console.log(e);
        response.json({
            status: "400",
            message: "no se pudo actualizar"
        })
    }
})


app.delete("/bien", async(request,response)=>{
    try{
        await eliminarbien(request.body)
        response.json({
            status: "201",
            message: "eliminado correctamente"
        }

        )

    }
    catch(e){
        console.log(e);
        response.json({
            status: "400",
            message: "no se pudo eliminar"
        })
    }
})


app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor inicial");
});



