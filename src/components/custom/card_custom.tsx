import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function CardInput() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Parâmetros de Entrada</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="initial-capital">Capital Inicial</Label>
          <Input
            id="initial-capital"
            min="0"
            placeholder="Digite o capital inicial"
            step="0.01"
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthly-interest">Taxa de Juros Mensal</Label>
          <Input
            id="monthly-interest"
            max="1"
            min="0"
            placeholder="Digite a taxa de juros mensal"
            step="0.01"
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthly-period">Período Mensal</Label>
          <Input
            id="monthly-period"
            min="1"
            placeholder="Digite o período mensal"
            step="1"
            type="number"
          />
        </div>
        <div className="flex justify-center">
          <Button
            className=" text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Calcular
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
