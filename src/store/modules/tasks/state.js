
export default {
  addTaskDialog: false,
  editTaskDialog: false,
  assignTaskDialog: false,

  selectedTask: {},
  tasks: []

  , headers: [
    { text: 'العنوان', value: 'title' },
    { text: 'الأولوية', value: 'urgent' },
    { text: 'توكيل المهمة الى', value: 'assignd' },
    { text: 'الحالة', value: 'status' },
    { text: 'الإجراء', value: 'actions' },

  ],
  weights: [
    { code: 1, label: '1' },
    { code: 2, label: '2' },
    { code: 3, label: '3' },
    { code: 4, label: '4' },
    { code: 5, label: '5' },
    { code: 6, label: '6' }],

  importance: [
    { code: 1, label: 'مهم' },
    { code: 2, label: 'غير مهم' },
  ],
  urgancy: [
    {code: 1, label: "عادي"},
    {code: 2, label: "عاجل"}]
}
