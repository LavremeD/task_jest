const express = require("express")

const routes = require("./routes")

const app = express();

app.use(express.json())

app.use(routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo deu errado")
})

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`) 
})
