import { app } from "./app";

app.listen(Number(process.env.API_PORT), () => {
    console.log("Server on");
});
