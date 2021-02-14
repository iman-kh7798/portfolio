
import express from 'express';
//import {matchRoutes} from "react-router-config";
//import Routes from "./Routes";
import renderer from "./helpers/renderer";
// import createServerStore from "./helpers/createServerStore";
const app=express();
app.use(express.static('public'));
app.get('*',(req,res)=>{
    // const store=createServerStore(req)
    // const promise=matchRoutes(Routes,req.path).map(({route})=>{
    //     return route.LoadData?route.LoadData(store) : null;
    // }).map(promise=>{
    //     if(promise){
    //     return new Promise((resolve ,reject)=>{
    //         promise.then(resolve).catch(resolve)
    //     })
    //     }
    // })



    // Promise.all(promise).then(()=>{
    //     const context={}
    //     const content=Renderer(req,store,context)
    //     if(context.uri){
    //         return res.redirect(301,context.uri)
    //     }
    //     if(context.notFound){
    //         res.status(404);
    //     }
        res.send(renderer(req,{}));
//    });
});
app.listen(3000,()=>{
    console.log('listening to port 3000')
});