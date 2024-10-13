import React from 'react';
import { Book, Users, BookOpen, List } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <DashboardCard title="Usuarios" icon={<Users />} link="/usuarios" />
              <DashboardCard title="Libros" icon={<Book />} link="/libros" />
              <DashboardCard title="Categorías" icon={<List />} link="/categorias" />
              <DashboardCard title="Préstamos" icon={<BookOpen />} link="/prestamos" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, link }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <a href={link} className="font-medium text-indigo-600 hover:text-indigo-500">
            Ver todos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;