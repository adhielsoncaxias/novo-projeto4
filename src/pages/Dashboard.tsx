import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import SalesTable from '../components/SalesTable';

const Dashboard: React.FC = () => {
  const [stats] = useState([
    {
      title: 'Receita Total',
      value: 'R$ 45.231',
      change: '+20.1% vs mês passado',
      changeType: 'positive' as const,
      icon: DollarSign
    },
    {
      title: 'Novos Usuários',
      value: '2.350',
      change: '+15.3% vs mês passado',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Total de Vendas',
      value: '1.234',
      change: '+12.5% vs mês passado',
      changeType: 'positive' as const,
      icon: ShoppingCart
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: '-2.4% vs mês passado',
      changeType: 'negative' as const,
      icon: TrendingUp
    }
  ]);

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Bem-vindo ao painel administrativo. Aqui está um resumo das suas métricas.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Vendas</h3>
          <div className="space-y-4">
            {[
              { name: 'Produto A', value: 45, color: 'bg-blue-500' },
              { name: 'Produto B', value: 30, color: 'bg-purple-500' },
              { name: 'Produto C', value: 15, color: 'bg-green-500' },
              { name: 'Produto D', value: 10, color: 'bg-orange-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-500`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sales Table */}
      <SalesTable />
    </div>
  );
};

export default Dashboard;