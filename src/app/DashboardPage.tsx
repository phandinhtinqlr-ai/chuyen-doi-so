import { useState } from 'react';
import { AlertTriangle, Clock, CheckCircle, Target, BarChart3, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

const mockData = {
  total: 100,
  inProgress: 40,
  completed: 50,
  overdue: 10,
  nearingDeadline: 15,
  avgProgress: 65,
  completionRate: 50,
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      {/* Warnings */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200 flex items-center gap-3 text-red-700 cursor-pointer hover:bg-red-100" onClick={() => setFilter('overdue')}>
          <AlertTriangle />
          <span>{mockData.overdue} nhiệm vụ quá hạn</span>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex items-center gap-3 text-amber-700 cursor-pointer hover:bg-amber-100" onClick={() => setFilter('nearing')}>
          <Clock />
          <span>{mockData.nearingDeadline} nhiệm vụ sắp đến hạn</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Tổng nhiệm vụ', value: mockData.total, color: 'text-slate-600' },
          { label: 'Đang triển khai', value: mockData.inProgress, color: 'text-cyan-600' },
          { label: 'Hoàn thành', value: mockData.completed, color: 'text-emerald-600' },
          { label: 'Quá hạn', value: mockData.overdue, color: 'text-red-600' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white p-4 rounded-xl border border-slate-200 cursor-pointer hover:shadow-md" onClick={() => setFilter(kpi.label)}>
            <p className="text-sm text-slate-500">{kpi.label}</p>
            <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-semibold mb-4">Nhiệm vụ theo phòng ban</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{ name: 'Nhân sự', val: 20 }, { name: 'Kỹ thuật', val: 30 }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="val" fill="#0891b2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-semibold mb-4">Cơ cấu loại nhu cầu</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie data={[{ name: 'Nội bộ', value: 40 }, { name: 'Khách hàng', value: 60 }]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                {COLORS.map((color, index) => <Cell key={`cell-${index}`} fill={color} />)}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
