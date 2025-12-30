import React, { useState } from 'react';
import { Bell, Shield, User, Globe, Palette, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground mt-1">Gerencie as preferências do sistema</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Perfil</h3>
              <p className="text-sm text-muted-foreground">Atualize suas informações pessoais</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="admin@empresa.com"
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                rows={3}
                defaultValue="Administrador do sistema"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Notificações</h3>
              <p className="text-sm text-muted-foreground">Configure como você quer ser notificado</p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium capitalize">{key === 'email' ? 'E-mail' : key === 'push' ? 'Push' : 'SMS'}</p>
                  <p className="text-sm text-muted-foreground">
                    Receber notificações via {key === 'email' ? 'e-mail' : key === 'push' ? 'navegador' : 'SMS'}
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-primary' : 'bg-muted-foreground/20'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Segurança</h3>
              <p className="text-sm text-muted-foreground">Mantenha sua conta segura</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors text-left">
              <p className="font-medium">Alterar Senha</p>
              <p className="text-sm text-muted-foreground">Última alteração há 3 meses</p>
            </button>
            <button className="w-full p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors text-left">
              <p className="font-medium">Autenticação de Dois Fatores</p>
              <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors font-medium">
            Cancelar
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
            <Save className="h-4 w-4" />
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;