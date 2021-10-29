export default {
  Incidents: [],
  selectedIncidence:[],

  Headers: [
    {text: 'العنوان', value: 'subject'},
    {text: 'فئة الحادثة', value: 'category.label'},
    {text: 'الجهة المتأثرة', value: 'org.orgname'},
    {text: 'مستوى الخطورة', value: 'saverity.lable'},
    
    {text: 'الإجراء', value: 'actions'},
  ],
  Cat: [
    {id : 1 ,code: "1", label: "حصان طروادة"},
    {id : 2 ,code: "2", label: "تعطيل الخدمة"},
    {id : 3 ,code: "3", label: "حقن قواعد البيانات"}
  ],
  Sector: [
    {code: "1", label: "الوزارات الخدمية"},
    {code: "2", label: "المؤسسات الحيوية"},
    {code: "3", label: " القطاع الخاص"},
    {code: "4", label: "  القطاع العسكري"}
  ],
  org: [
    {code: "1", label: "وزارة الاعلام"},
    {code: "4", label: "وزارة التجارة و الصناعة"},
    {code: "2", label: "وزارة البيئة"},
    {code: "3", label: "وزارة التربية و التعليم"}
  ],
  Urgancey: [
    {id : 1, code: "1", label: "عادي"},
    {id : 2 ,code: "2", label: "عاجل"},
    {id : 3, code: "3", label: "عاجل جدا"}
  ],
  Sver: [
    {id: 1 ,code: "1", label: "المستوى الخامس"},
    {id: 2 ,code: "2", label: "المستوى الرايع"},
    {id :3 ,code: "3", label: "المستوى الثالث"},
    {id :4,code: "4", label: "المستوى الثاني"},
    {id :5,code: "5", label: "المستوى الاول"}
  ],
  Status: [
    {id : 1 ,code: "1", label: "مفتوحة"},
    {id : 2 ,code: "2", label: "مغلقة"},
    {id : 3 ,code: "3", label: "قيد الاجراء"},
  ],
  comments: []
}


