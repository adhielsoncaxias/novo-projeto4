import React, { useState } from 'react';
import { Search, Filter, UserPlus, MoreVertical, Mail, Phone } from 'lucide-react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com', role: 'Admin', status: 'Ativo', avatar: 'AS' },
    { id: 2, name: 'Bruno Costa', email: 'bruno.costa@email.com', role: 'Editor', status: 'Ativo', avatar: 'BC' },
    { id: 3, name: 'Carla Santos', email: 'carla.santos@email.com', role: 'Viewer', status: 'Inativo', avatar: 'CS' },
    { id: 4, name: 'Diego Alves', email: 'diego.alves@email.com', role: 'Editor', status: 'Ativo', avatar: 'DA' },
    { id: 5, name: 'Elisa Rocha', email: 'elisa.rocha@email.com', role: 'Admin', status: 'Ativo', avatar: 'ER' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
          <p className="text-muted-foreground mt-1">Gerencie os usuários do sistema</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <UserPlus className="h-4 w-4" />
          <span className="font-medium">Novo Usuário</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar usuários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg hover:bg-accent transition-colors">
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filtros</span>
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Ativo' 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                      : 'bg-gray-500/10 text-gray-600 dark:text-gray-400'
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                  {user.role}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex gap-2">
              <button className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                Editar
              </button>
              <button className="flex-1 px-3 py-2 border border-border rounded-lg hover:bg-accent transition-colors text-sm font-medium">
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;