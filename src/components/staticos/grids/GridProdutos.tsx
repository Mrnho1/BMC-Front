import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, Select, colors } from "@material-ui/core";
import imagem from "./logoRosa.png";
import { ImportContacts } from "@material-ui/icons";
import "./Grid.css";
import { useState } from "react";
import { redirect, Link } from "react-router-dom";
import VirtualizedList from "../../lista/Lista";
import Lista from "../../lista/Lista";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import logoRosa from "./logoRosa.png";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

interface Product {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
    colors: string[];
    material: string[];
    tamanho: string[];
    categoria: string[];
    quantidade: number;
}

export default function GridProdutos() {
    const initialProducts: Product[] = [
        {
            id: 0,
            name: "Almofada/bolsa térmica",
            description:
                "Almofada com bolsa térmica para cólicas menstruais",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 1,
            name: "Absorvente interno",
            description:
                "absorvente interno feito com produtos naturais, com 3 opções de tamanho.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 2,
            name: "Calcinha absorvente",
            description:
                "calcinha absorvente de algodão orgânico e 1 camada de poliester.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 3,
            name: "Coletor menstrual",
            description:
                "coletor menstrual feito com material biodegradável, com 3 opções de tamanho.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho "],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 4,
            name: "Absorvente reutilizável",
            description:
                "absorvente reutilizável feito com material biodegradável, com 3 opções de tamanho.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 5,
            name: "Pants absorvente",
            description:
                "pants absorvente feito com material biodegradável, com 3 opções de tamanho.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 6,
            name: "Shorts absorvente",
            description:
                "shorts absorvente menstrual feito com material biodegradável",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 7,
            name: "Sabonete liquido", 
            description:
                "sabonete liquido intimo melaleuca e óleo de coco.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 8,
            name: "Sabonete",
            description:
                "sabonete em barra intimo feito com aloe vera.",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 9,
            name: "Camiseta",
            description: "Camisetinha feita com material biodegradável",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 10,
            name: "Blusa",
            description: "blusa feita com material biodegradável",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
        {
            id: 11,
            name: "Moletom",
            description: "moletom feito com material biodegradável",
            img: logoRosa,
            price: 34.95,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "pink",
                "purple",
                "orange",
                "gray",
                "brown"
            ],
            material: ["algodão", "poliester", "seda", "linho"],
            tamanho: ["P", "M", "G", "GG", "XG", "XXG", "XXXG", "XXXXG"],
            categoria: [
                "absorvente",
                "coletor-menstrual",
                "calcinha",
                "pants",
                "absorvente interno",
                "copinho",
                "calcinha absorvente",
                "calcinha menstrual",
                "sabonete liquido"
            ],
            quantidade: 0
        },
    ]

    //Carrinho de compras
    const [carrinho, setCarrinho] = useState<Product[]>([]);
    const [total, setTotal] = useState(0);

    //Adicionar Produtos no carrinho
    function adicionarProdutoCarrinho(produto: Product) {
        setCarrinho([...carrinho, produto]);
    }

    //Remover produtos do carrinho
    function removerProdutoCarrinho(produto: Product) {
        setCarrinho(carrinho.filter(p => p.id !== produto.id));
    }

    //Limpar carrinho
    function limparCarrinho() {
        setCarrinho([]);
    }

    //Somar produtos no carrinho
    function somarProdutosCarrinho(produtos: Product[]) {
        return produtos.reduce(
            (acc: number, produto: Product) => acc + produto.price,
            0
        );
    }



//Adicionando estilo com Material UI

//Convertido para TypeScript

return (
    <div>
    <Grid container spacing={4} style={{ padding: 24, margin: 0, width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
      {initialProducts.map((product: any) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box boxShadow={4}>
            <div className='produto' style={{ padding: "25px", margin: "15px" }}>
              <h1>{product.name}</h1>
              <img  src={product.img} alt={product.name} />
              {product.description}
              <h3>{product.price}</h3>
              <h3>{product.color}</h3>
              <Button variant="contained" color="#c75f77" onClick={() => adicionarProdutoCarrinho(product)}>
                Add to Cart <LocalGroceryStoreIcon/>
              </Button>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
    <h1>Carrinho de compras</h1>
    <Grid container spacing={4} style={{ color:'purple', padding: 24, margin: 0, width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
      <div className="carrinho">
        <h1>Carrinho</h1>
        <h2>Total: {somarProdutosCarrinho(carrinho)}</h2>
        <Button  variant="contained" style={{color:'purple'}} onClick={() => limparCarrinho()}>Limpar carrinho <LocalGroceryStoreIcon /></Button>
        <Grid container style={{ justifyContent: "center" }}>
          {carrinho.map((product: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center", justifyContent: "center", padding: "10px", margin: "20px" }}>
              <div className="product" style={{ padding: "10px", margin: "20px" }}>
                {product.name},
                <h2>{product.price}</h2>
                <Button variant="contained" color="#c75f77" onClick={() => removerProdutoCarrinho(product)}>Remover</Button>
                <div className="lista">

                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  </div>
);
          }