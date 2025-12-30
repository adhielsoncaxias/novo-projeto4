import React from 'react';
import { TrendingUp } from 'lucide-react';

const RevenueChart: React.FC = () => {
  const data = [
    { month: 'Jan', value: 12000 },
    { month: 'Fev', value: 19000 },
    { month: 'Mar', value: 15000 },
    { month: 'Abr', value: 25000 },
    { month: 'Mai', value: 22000 },
    { month: 'Jun', value: 30000 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Receita Mensal</h3>
          <p className="text-sm text-muted-foreground">Últimos 6 meses</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+12.5%</span>
        </div>
      </div>

      <div className="h-64">
        <div className="flex items-end justify-between h-full gap-2">
          {data.map((item, idx) => {
            const height = (item.value / maxValue) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center h-full">
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-purple-600 rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer relative group"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card border border-border px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      R$ {item.value.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground font-medium">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;