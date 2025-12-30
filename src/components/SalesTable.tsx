import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react';

interface Sale {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Pago' | 'Pendente' | 'Cancelado';
  date: string;
}

const SalesTable: React.FC = () => {
  const [sortField, setSortField] = useState<keyof Sale>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sales: Sale[] = [
    { id: '#001', customer: 'Ana Silva', product: 'Produto Premium', amount: 1299.90, status: 'Pago', date: '2024-01-15' },
    { id: '#002', customer: 'Bruno Costa', product: 'Produto Basic', amount: 499.90, status: 'Pendente', date: '2024-01-14' },
    { id: '#003', customer: 'Carla Santos', product: 'Produto Pro', amount: 899.90, status: 'Pago', date: '2024-01-14' },
    { id: '#004', customer: 'Diego Alves', product: 'Produto Premium', amount: 1299.90, status: 'Cancelado', date: '2024-01-13' },
    { id: '#005', customer: 'Elisa Rocha', product: 'Produto Basic', amount: 499.90, status: 'Pago', date: '2024-01-13' }
  ];

  const handleSort = (field: keyof Sale) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pago':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Pendente':
        return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
      case 'Cancelado':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold">Vendas Recentes</h3>
        <p className="text-sm text-muted-foreground mt-1">Últimas transações realizadas</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              {[
                { label: 'ID', field: 'id' as keyof Sale },
                { label: 'Cliente', field: 'customer' as keyof Sale },
                { label: 'Produto', field: 'product' as keyof Sale },
                { label: 'Valor', field: 'amount' as keyof Sale },
                { label: 'Status', field: 'status' as keyof Sale },
                { label: 'Data', field: 'date' as keyof Sale }
              ].map((header) => (
                <th
                  key={header.field}
                  onClick={() => handleSort(header.field)}
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {header.label}
                    {sortField === header.field && (
                      sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                    )}
                  </div>
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium">{sale.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm">{sale.customer}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{sale.product}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold">
                    R$ {sale.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                    {sale.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">
                    {new Date(sale.date).toLocaleDateString('pt-BR')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando <span className="font-medium">5</span> de <span className="font-medium">127</span> vendas
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-accent transition-colors text-sm font-medium">
            Anterior
          </button>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesTable;