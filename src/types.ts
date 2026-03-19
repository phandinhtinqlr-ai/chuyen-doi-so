export interface Task {
  id: string;
  code: string;
  title: string;
  description: string;
  department: string;
  assignee: string;
  type: string;
  scope: string;
  systemType: string;
  status: 'Mới' | 'Đang thực hiện' | 'Hoàn thành' | 'Huỷ';
  progress: number;
  startDate: string;
  dueDate: string;
  priority: 'Cao' | 'Trung bình' | 'Thấp';
  approval: 'Triển khai ngay' | 'Bình thường' | 'Huỷ';
  result: string;
  risk: string;
  proposal: string;
  note: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface HistoryLog {
  id: string;
  taskId: string;
  time: string;
  user: string;
  action: string;
  detail: string;
}
