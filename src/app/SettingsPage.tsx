import { useState } from 'react';
import { Plus, Edit2, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import * as Constants from '../constants';

const categoryMap: Record<string, string[]> = {
  'Phòng ban': Constants.DEPARTMENTS,
  'Đầu mối phụ trách': Constants.OWNERS,
  'Loại nhu cầu': Constants.CATEGORIES,
  'Phạm vi': Constants.SCOPES,
  'Hình thức hệ thống': Constants.SYSTEM_TYPES,
  'Trạng thái': Constants.STATUSES,
  'Phê duyệt ưu tiên triển khai': Constants.APPROVAL_LEVELS
};

const categories = Object.keys(categoryMap);

export default function SettingsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [role] = useState('Administrator'); // Mock role

  return (
    <div className="flex h-full gap-6">
      <div className="w-1/4 bg-white p-4 rounded-xl border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-4">Danh mục</h3>
        <div className="space-y-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left p-2 rounded-lg ${selectedCategory === cat ? 'bg-cyan-50 text-cyan-700' : 'hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-slate-800">{selectedCategory}</h3>
          {role === 'Administrator' && (
            <button className="flex items-center space-x-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700">
              <Plus size={18} />
              <span>Thêm mới</span>
            </button>
          )}
        </div>
        <div className="space-y-2">
          {categoryMap[selectedCategory].map((value, i) => (
            <div key={i} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
              <span>{value}</span>
              <div className="flex items-center space-x-2">
                {role === 'Administrator' && (
                  <>
                    <button className="p-2 text-slate-500 hover:text-cyan-600"><Edit2 size={18} /></button>
                    <button className="p-2 text-slate-500 hover:text-red-600"><Trash2 size={18} /></button>
                    <button className="p-2 text-slate-500 hover:text-cyan-600">{i % 2 === 0 ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
