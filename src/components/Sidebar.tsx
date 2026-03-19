import { LayoutDashboard, CheckSquare, History, Settings, Calendar, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-cyan-400">Ba Na Hills</h1>
        <p className="text-sm text-slate-400">CHUYỂN ĐỔI SỐ</p>
        <p className="text-xs text-slate-500 mt-1">by Phan Đình Tín</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {[
          { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
          { name: 'Nhiệm vụ', icon: CheckSquare, path: '/tasks' },
          { name: 'Lịch sử', icon: History, path: '/history' },
          { name: 'Cấu hình', icon: Settings, path: '/settings' },
          { name: 'Calendar', icon: Calendar, path: '/calendar' },
        ].map((item) => (
          <Link key={item.name} to={item.path} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition">
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto bg-slate-800 p-4 rounded-xl">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold">PT</div>
          <div>
            <p className="text-sm font-medium">Phan Đình Tín</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white">
          <LogOut size={16} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}
