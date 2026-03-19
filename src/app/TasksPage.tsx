import { useState } from 'react';
import { Task } from '../types';
import { Search, Plus, FileSpreadsheet, Upload, Download } from 'lucide-react';

const mockTasks: Task[] = [
  {
    id: '1',
    code: 'CĐS-01',
    title: 'Số hoá quy trình nhân sự',
    description: 'Chuyển đổi quy trình giấy sang điện tử',
    department: 'Nhân sự',
    assignee: 'Nguyễn Văn A',
    type: 'Nội bộ',
    scope: 'Toàn công ty',
    systemType: 'Web',
    status: 'Đang thực hiện',
    progress: 50,
    startDate: '2026-03-01',
    dueDate: '2026-04-01',
    priority: 'Cao',
    approval: 'Triển khai ngay',
    result: '',
    risk: 'Chưa có',
    proposal: '',
    note: '',
  },
];

export default function TasksPage() {
  const [tasks] = useState<Task[]>(mockTasks);
  const [role] = useState('Administrator'); // Mock role

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Nhiệm vụ</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200"><FileSpreadsheet size={18}/>Excel</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200"><Download size={18}/>Export</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200"><Upload size={18}/>Import</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"><Plus size={18}/>Tạo mới</button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={18}/>
          <input className="w-full pl-10 pr-4 py-2 border rounded-lg" placeholder="Tìm kiếm..."/>
        </div>
        <select className="border rounded-lg px-4 py-2"><option>Trạng thái</option></select>
        <select className="border rounded-lg px-4 py-2"><option>Phòng ban</option></select>
        <select className="border rounded-lg px-4 py-2"><option>Đầu mối</option></select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50">
            <tr>
              <th className="px-6 py-3">Mã</th>
              <th className="px-6 py-3">Tên công việc</th>
              <th className="px-6 py-3">Tiến độ</th>
              <th className="px-6 py-3">Trạng thái</th>
              <th className="px-6 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="bg-white border-b hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">{task.code}</td>
                <td className="px-6 py-4">{task.title}</td>
                <td className="px-6 py-4">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{width: `${task.progress}%`}}></div>
                  </div>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-slate-100">{task.status}</span></td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-cyan-600 hover:underline">Chi tiết</button>
                  <button className="text-cyan-600 hover:underline">+ Tiến độ</button>
                  {role === 'Administrator' && <button className="text-red-600 hover:underline">Xoá</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
