"use client"

import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { fibonacci } from "@/functions/fibonacci";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Home() {
  const [fibonacciDialogOpen, setFibonacciDialogOpen] = useState(false);
  const [inputNumber, setInputNumber] = useState("");

  const handleOpenFibonacciDialog = () => {
    setFibonacciDialogOpen(!fibonacciDialogOpen);
  };

  const handleCalculateFibonacci = () => {
    const result = fibonacci(Number(inputNumber));
    console.log(result);
    // do something with the result
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center p-10 m-10 w-full">
        <Typography variant="h1" color="blue" textGradient>
          DACPSIMAT
        </Typography>

        <Typography variant="h4" color="blue-gray" textGradient>
          Escolha uma opção
        </Typography>

        <div className="w-[75%] mt-32 p-6 m-auto bg-[#ECF0F3] rounded-md  ring-2 ring-[#0073A5] lg:max-w-xl shadow-xl shadow-gray-400">
          <Button
            id="fibonnaci"
            onClick={handleOpenFibonacciDialog}
            className="mt-5 m-5 pt-10"
            size="md"
          >
            Sequência de Fibonacci
          </Button>

          <Button className="ml-5" size="md">
            Dobro do Capital
          </Button>

          <Dialog open={fibonacciDialogOpen} onClose={handleOpenFibonacciDialog}>
            <DialogHeader>Calcular Sequência de Fibonacci</DialogHeader>
            <DialogBody divider>
              <input
                type="number"
                placeholder="Digite um número"
                className="w-full p-2 m-2 border-2 border-gray-300 rounded-md"
                onChange={(e) => setInputNumber(e.target.value)}
              />
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpenFibonacciDialog}
                className="mr-1"
              >
                Cancelar
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handleCalculateFibonacci}
              >
                Calcular
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </main>
  );
}

