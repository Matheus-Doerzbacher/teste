import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LineChart } from "./line_chart";

export function CardChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resultados</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Juros Compostos
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              $<span id="compound-interest">0.00</span>
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Juros Simples
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              $<span id="simple-interest">0.00</span>
            </p>
          </div>
        </div>
        <LineChart className="aspect-[4/3]" />
      </CardContent>
    </Card>
  );
}
