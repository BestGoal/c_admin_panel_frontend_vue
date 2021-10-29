
export default {
  addDialog : false,
  editDialog : null,
  loggedin :false,
  response : "Reposnse",
  employees  :[]
    ,headers: [
      { text: 'ID', value: 'username' },
      { text: 'Name', value: 'name' },
      { text: 'Department', value: 'department' },
      { text: 'Section', value: 'section' },
      { text: 'Job Title', value: 'jobTitle' },
      { text: 'Role', value: 'role' },
    ],
    sections : [{ code: '1', label: 'HR Development' },
    { code: '2', label: 'Testing' },
    { code: '3', label: 'Programming' }],
    departments : [
      { code: '1', label: 'HR Development' },
      { code: '2', label: 'Testing' },
      { code: '3', label: 'Programming' }]

}
