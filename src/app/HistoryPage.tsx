const mockHistory = [
  { id: 1, time: '2026-03-18 09:00', user: 'Phan Đình Tín', action: 'Đăng nhập', detail: 'Đăng nhập vào hệ thống' },
  { id: 2, time: '2026-03-18 09:15', user: 'Phan Đình Tín', action: 'Tạo nhiệm vụ', detail: 'Tạo task CĐS-01: Số hoá quy trình' },
  { id: 3, time: '2026-03-18 10:00', user: 'Editor', action: 'Cập nhật tiến độ', detail: 'Cập nhật task CĐS-01 từ 20% lên 50%' },
];

export default function HistoryPage() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Lịch sử hoạt động</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50">
            <tr>
              <th className="px-6 py-3">Thời gian</th>
              <th className="px-6 py-3">Người dùng</th>
              <th className="px-6 py-3">Hành động</th>
              <th className="px-6 py-3">Chi tiết thay đổi</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((log) => (
              <tr key={log.id} className="bg-white border-b hover:bg-slate-50">
                <td className="px-6 py-4">{log.time}</td>
                <td className="px-6 py-4 font-medium text-slate-900">{log.user}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded bg-cyan-100 text-cyan-800 text-xs">{log.action}</span>
                </td>
                <td className="px-6 py-4 text-slate-600">{log.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
