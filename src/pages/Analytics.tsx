import React from 'react';
import { LineChart, BarChart3, PieChart, Activity } from 'lucide-react';
import RevenueChart from '../components/RevenueChart';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Análise detalhada de métricas e performance
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Activity, label: 'Taxa de Engajamento', value: '68.2%', change: '+5.2%' },
          { icon: LineChart, label: 'Tempo Médio', value: '4m 32s', change: '+12s' },
          { icon: BarChart3, label: 'Páginas/Sessão', value: '3.8', change: '+0.3' },
          { icon: PieChart, label: 'Taxa de Rejeição', value: '42.1%', change: '-3.2%' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <RevenueChart />

      {/* Additional Analytics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Fontes de Tráfego</h3>
          <div className="space-y-4">
            {[
              { source: 'Orgânico', visits: '12.4k', percentage: 45, color: 'bg-blue-500' },
              { source: 'Direto', visits: '8.2k', percentage: 30, color: 'bg-purple-500' },
              { source: 'Referral', visits: '4.1k', percentage: 15, color: 'bg-green-500' },
              { source: 'Social', visits: '2.7k', percentage: 10, color: 'bg-orange-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.source}</span>
                  <span className="text-sm text-muted-foreground">{item.visits}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Dispositivos</h3>
          <div className="space-y-4">
            {[
              { device: 'Mobile', users: '14.2k', percentage: 52, icon: '📱' },
              { device: 'Desktop', users: '9.8k', percentage: 36, icon: '💻' },
              { device: 'Tablet', users: '3.3k', percentage: 12, icon: '📱' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-medium">{item.device}</p>
                    <p className="text-sm text-muted-foreground">{item.users} usuários</p>
                  </div>
                </div>
                <span className="text-2xl font-bold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;